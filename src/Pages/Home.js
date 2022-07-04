import React,{useState} from 'react'
import {db} from './../firebase'

const Home = () => {
  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const min=1
    const max = 100000000000
    const randomId = min + Math.random() * (max - min);
    if(title !=="" && desc !==""){
    await db.collection("ToDo-List").doc(randomId.toString()).set({
      id: randomId,
      title:title,
      description:desc,
      completed:false
    })
    .then((res)=>{
      console.log(res);
      window.alert(`"${res.data.text}" is created`)
      window.location.reload();
    })
    .catch((err)=>{
      console.log(err)
      window.alert("ToDo is added")
      window.location.reload()
    });
  }
  }
  return (
    <>
    <div className='w-full py-10 md:py-20'>
    <div className='max-w-[1240] my-10 mx-auto'>
      <h1 className='text-center font-serif font-semibold text-2xl md:text-3xl pt-3 pb-6 text-[#a3e635]'> Add a ToDo </h1>
    <form onSubmit={handleSubmit} className='text-center text-[#3f3f46]' >
      <label> ToDo Title</label><br/>
      <input className='p-2 border-b flex mx-auto w-[75%] md:w-[50%] rounded-md ' type='text' value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}}/><br/>
      <label> ToDo Description</label><br/>
      <textarea className='p-2 border-b flex mx-auto w-[75%] md:w-[50%] rounded-md ' rows={2} value={desc} name='description' onChange={(e)=>{setDesc(e.target.value)}}/>
      <div className='pt-5'> 
      <button className='px-4 py-2 border border-gray-300 bg-[#a3e635] text-[#3f3f46] rounded-md'>Submit</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Home