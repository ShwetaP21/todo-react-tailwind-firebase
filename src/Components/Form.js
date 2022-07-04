import React from 'react'

const Form = ({handleChange,values,setValues,handleSubmit}) => {
    const {title,description} =values
  return (
    <form onSubmit={handleSubmit} className='text-center text-[#3f3f46]' >
      <label> ToDo Title</label><br/>
      <input className='p-2 border-b flex mx-auto w-[75%] md:w-[50%] rounded-md ' type='text' value={title} name='title' onChange={handleChange}/><br/>
      <label> ToDo Description</label><br/>
      <textarea className='p-2 border-b flex mx-auto w-[75%] md:w-[50%] rounded-md ' rows={2} value={description} name='description' onChange={handleChange}/>
      <div className='pt-5'> 
      <button className='px-4 py-2 border border-gray-300 bg-[#a3e635] text-[#3f3f46] rounded-md'>Submit</button>
      </div>
    </form>
  )
}

export default Form