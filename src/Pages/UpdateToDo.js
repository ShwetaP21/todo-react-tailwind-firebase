import React from 'react'
import { useParams } from "react-router";
import { useHistory } from 'react-router-dom';
import Home from './Home';
import { db } from '../firebase';

const initialState ={
    title: '',
    description:'',
    completed: false
}

const UpdateToDo = () => {
    const { id } = useParams();
    const [values, setValues] = useState(initialState);
    let history = useHistory();
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const retrive = async () => {
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
                history.push("/");
            })
            .catch((err) => {
                console.log(err);
                alert("ToDo Updated")
                window.location.reload();
            });
    };
  return (
    <>
    <Home 
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setValues={setValues}
        values={values}
    />
    </>
  )
}

export default UpdateToDo