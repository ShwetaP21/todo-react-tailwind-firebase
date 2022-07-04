import React,{useState} from 'react'
import { AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }

  return (
    <>
    <nav className='max-w-[12040px] items-center text-[#52525b] bg-[#f4f4f5] text-lg flex justify-between'>
      <h1 className='p-3 ml-2 text-2xl font-semibold text-[#a3e635] font-serif'> ToDo </h1>
      <ul className='hidden md:flex '>
        <Link to='/'><li className='p-3'> Home </li></Link>
        <Link to='/todo-list'><li className='p-3'> ToDo-List </li></Link>
        <Link to='/login'> <p className='p-3 mr-5' > Login </p> </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden' >
       {!nav?<AiOutlineMenu size={25}/>:<AiOutlineClose size={25}/>}
      </div>
      <div className={nav?'fixed w-[30%] h-full top-0 left-0 border-r bg-white border-gray-200 ease-in-out duration-500':'fixed left-[-100%] top-0 ease-in-out duration-500 '}>
      <h1 className='p-3 ml-2 text-2xl font-semibold text-[#a3e635] font-serif'> ToDo </h1>
      <ul>
        <Link to='/'><li className='p-3 border-t border-b border-gray-300'> Home </li></Link>
        <Link to='/todo-list'><li className='p-3 border-b border-gray-300'> ToDo-List </li></Link>
        <Link to='/login'> <p className='p-3 border-gray-300' > Login </p> </Link>
      </ul>
      </div>
      
    </nav>
    </>
  )
}

export default Navbar