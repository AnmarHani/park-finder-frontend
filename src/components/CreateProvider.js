import React, {useState} from 'react'
import axios from '../axios'
import  { useNavigate } from 'react-router-dom'

const CreateProvider = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')

    const nameHanlder = (event) => {
        setName(event.target.value)
    }   

    const formHanlder = async(e) => {
        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`
        const data = {
            'name':name,
        }
        const response = await axios.post(`api/CreateProvider/`, data)
        if(response){
            localStorage.setItem('provider', response.data.data);
            navigate('/provider-home')
        }
    }
    return (
        <>
            <div className="form-container">
                <form action="" className="form">
                    <h1 className="title">CHOOSE YOUR COMPANY NAME</h1>
                    <input type="text" onChange={nameHanlder} placeholder="Name"/>
                    <button className="btn" onClick={formHanlder}>
                        Continue
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateProvider
