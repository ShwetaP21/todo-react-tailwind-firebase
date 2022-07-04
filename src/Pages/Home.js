import React,{useState} from 'react'
import Form from '../Components/Form'
import {db} from './../firebase'

const initialState={
  title:'',
  description:''
}
const Home = () => {
  const[values,setValues]=useState(initialState)

  const handleChange =(e)=>{
    setValues({...values,[e.target.name]: e.target.value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const min=1
    const max = 100000000000
    const randomId = min + Math.random() * (max - min);
    if(values.title && values.description){
    await db.collection("ToDo-List").doc(randomId.toString()).set({
      id: randomId,
      title:values.title,
      description:values.description,
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
    <Form
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    values={values}
    setValues={setValues}
    />
    </div>
    </div>
    </>
  )
}

export default Home