import React, {useState} from 'react'
import axios from '../axios'
import  { useNavigate } from 'react-router-dom'
import LoginImage from '../images/Login-Image.png'
import {Link} from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }   
    const passwordHanlder = (event) => {
        setPassword(event.target.value)
    }   

    const formHanlder = async(e) => {
        e.preventDefault()
        const data = {
            'username':username,
            'password':password
        }
        const response = await axios.post(`Login/`, data)
        if(response){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('provider', response.data.provider);
            localStorage.setItem('is_provider', response.data.is_provider);
            axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`
            if(response.data.is_provider){
                navigate('/provider-home')
            }else{
                navigate('/home')
            }
            // props.setTasks([...props.tasks, response.data.data])
        }
    }
    return (
        <>
            <div className="form-container">
                <form action="" className="form">
                    <h1 className="title">Welcome back</h1>
                    <h4 className="description">Sign in to your account</h4>
                    <input type="text" onChange={usernameHandler} placeholder="Username"/>
                    <input type="password" onChange={passwordHanlder} placeholder="Password"/>
                    <button className="btn" onClick={formHanlder}>
                        Sign in
                    </button>
                    <h5 className="description">Dont have an account?  <Link to="/register" className="title">Sign Up</Link></h5>
                </form>
                <div className="image-container">
                    <img src={LoginImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Login
