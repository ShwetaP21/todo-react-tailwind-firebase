import React,{useState} from 'react'

import { useEffect } from 'react'
import { db } from '../firebase'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'
import { Link } from 'react-router-dom'

const TodoList = () => {
 
  const[data,setData]=useState([])
  useEffect (()=>{
    loadData();
  },[])

  const handleDelete =async(did)=>{
    await db.collection("ToDo-List").doc(did.toString()).delete()
    window.location.reload()
  }

  const handleComplete = async (did) => {
    await db.collection("ToDo-List").doc(did.toString()).update({
      completed: true
    })
      .then((res) => {
        console.log(res);
        window.alert(`"${res.data.title}" is updated`);
        window.location.reload();

      })
      .catch((err) => {
        console.log(err.message);
        alert("ToDo Completed")
        window.location.reload();
      });
  }


  const loadData=async()=>{
    await db.collection("ToDo-List").get()
    .then((querySnapshot)=>{
      querySnapshot.forEach((element)=>{
        let tdata=element.data();
        setData((arr)=>[...arr,tdata])
      })
    });
  }
  return (
    <>
    <div className='w-full py-10 md:py-20'>
    <div className='max-w-[1240] my-10 mx-auto'>
      <h1 className='text-center font-serif font-semibold text-2xl md:text-3xl pt-3 pb-6 text-[#a3e635]'> ToDo-List</h1>
      <div className='w-full mx-auto md:px-20 grid md:grid-cols-3'>
    {data.map((d)=>(
      <> 
      <div className='py-3 px-2'>
      <div className=' w-[300px] h-[200px] bg-[#f0fdf4] shadow-xl flex g flex-col mx-4 md:mx-0 rounded-lg hover:scale-105 duration-200'>
      <h1 className={`${d.completed && "line-through"} p-2 text-[#3f3f46] font-sans text-xl`}>{d.title}</h1>
      <p className='p-2 text-[#71717a] font-sans text-sm'>{d.description}</p>
      <div className='flex justify-center' >
      <div className='p-3'>
      <button onClick={() => handleComplete(d.id)} className='p-3 border border-gray-200 rounded-lg'>
      <AiFillCheckCircle size={20} />
      </button>
      </div >
      <div className='p-3'>
      <button className='p-3 border border-gray-200 rounded-lg' >
        <Link to={`/update/${d.id}`}>
      <BsFillPencilFill  size={20}/>
        </Link>
      </button>
      </div>
      <div className='p-3'>
      <button className='p-3 border border-gray-200 rounded-lg' onClick={()=>{handleDelete(d.id)}} >
      <ImBin size={20}/>
      </button>
      </div>
      </div>
      </div>
      </div>
      </>
    ))}
    </div>
    </div>
    </div>
   
    </>
  )
}

export default TodoList