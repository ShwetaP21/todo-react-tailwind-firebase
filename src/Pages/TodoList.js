import React,{useState} from 'react'
import { useEffect } from 'react'
import { db } from '../firebase'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BsFillPencilFill} from 'react-icons/bs'
import {ImBin} from 'react-icons/im'

const TodoList = () => {
 
  const[data,setData]=useState([])
  // const handleUpdate =async(id)=>{
  //  await db.collection("ToDo-List").doc(id).update({
  //     title: title
  //  })
  // }
  

  useEffect (()=>{
    loadData();
  },[])

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
      <div className='card'>
    {data.map((d)=>(
      <> 
      <textarea className='p-2 border-b flex mx-auto w-[75%] md:w-[50%] rounded-md ' rows={2} value={d.title}  name='description'/>
      <div className='max-w-[200] flex justify-between' >
      <button className='p-3 border border-gray-200 rounded-md' >
      <AiFillCheckCircle size={20}/>
      </button>
      <button className='pl-3 border border-gray-200' >
      <BsFillPencilFill  size={20}/>
      </button>
      <button className='p-3 border border-gray-200' >
      <ImBin size={20}/>
      </button>
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