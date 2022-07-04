import React,{useState} from 'react'

const Register = () => {
const[fname,setFname]=useState("")

const[uname,setUname]=useState("")
  return (
    <>
     <div className='w-full py-10 md:py-20'>
    <div className='max-w-[1240] my-10 mx-auto'>
      <h1 className='text-center font-serif font-semibold text-2xl md:text-3xl pt-3 pb-6 text-[#a3e635]'> Registration </h1>
    <form className='text-center text-[#3f3f46]' >
      <label>Enter First Name</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type='text' value={fname} name='Fname' onChange={(e)=>{setFname(e.target.value)}}/><br/>
      <label>Enter Mobile No.</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type="phone" name='phone' /><br/>
      <label>Enter Email</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type='email'  name='email' /><br/>
      <label>Enter Username</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type='text' value={uname} name='uname' onChange={(e)=>{setUname(e.target.value)}}/><br/>
      <label>Enter Password</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' name='password' type='password'/><br/>
      <div className='pt-5'>
      <button className='px-4 py-2 border border-gray-300 bg-[#a3e635] text-[#3f3f46] rounded-md'>Register</button>
      </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default Register