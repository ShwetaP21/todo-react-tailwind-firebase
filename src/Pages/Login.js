import React,{useState} from 'react'
import{Link} from 'react-router-dom'

const Login = () => {
  const[text,setText]=useState("")
  return (
    <>
     <div className='w-full py-10 md:py-20'>
    <div className='max-w-[1240] my-10 mx-auto'>
      <h1 className='text-center font-serif font-semibold text-2xl md:text-3xl pt-3 pb-6 text-[#a3e635]'> Enter Login Credentials </h1>
    <form className='text-center text-[#3f3f46]' >
      <label> Username</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type='text' value={text} name='title' onChange={(e)=>{setText(e.target.value)}}/><br/>
      <label> Password</label><br/>
      <input className='p-2 border-b flex mx-auto w-[50%] md:w-[25%] rounded-md ' type='password'/><br/>
      <div className='pt-1'> 
      <button className='px-4 py-2 border border-gray-300 bg-[#a3e635] text-[#3f3f46] rounded-md'>Login</button>
      </div>
    </form>
    <Link to="/register" > 
    <div className='pt-4'>
    <p className='text-sm text-gray-500 text-center '> Dont have an account? Register now</p>
    </div>
      </Link>
    </div>
    </div>
    </>
  )
}

export default Login