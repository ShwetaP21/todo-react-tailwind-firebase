
/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState} from 'react'
import { useEffect } from 'react';
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import Form from './../Components/Form';
import { db } from '../firebase';

const initialState ={
    title: '',
    description:'',
}

const UpdateToDo = () => {
    const { id } = useParams();
    const [values, setValues] = useState(initialState);
    let history = useHistory();

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        retreive();
    }, []);

    const retreive = async () => {
        try {
            await db.collection('ToDo-List')
                .doc(id)
                .get()
                .then(doc => {
                    if (doc && doc.exists) {
                        setValues(doc.data());
                        console.log("This is doc", doc.data())
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
        await db.collection("ToDo-List").doc(id).update({
            title:values.title,
            description: values.description,
        })
            .then((res) => {
                console.log(res);
                window.alert(`"${res.data.Title}" is updated`);
                window.location.reload();
               
            })
            .catch((err) => {
                console.log(err);
                alert("ToDo Updated")
                history.push("/todo-list");
                window.location.reload();
            });
    };
  return (
    <>
    <div className='w-full py-10 md:py-20'>
    <div className='max-w-[1240] my-10 mx-auto'>
      <h1 className='text-center font-serif font-semibold text-2xl md:text-3xl pt-3 pb-6 text-[#a3e635]'> Edit ToDo </h1>
    
    <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setValues={setValues}
        values={values}
    />
    </div>
    </div>
    </>
  )
}

export default UpdateToDo