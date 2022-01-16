import React, {useState} from 'react'
import axios from '../axios'
import  { useNavigate } from 'react-router-dom'
import RegisterImage from '../images/Register-Image.png'
import {Link} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }   
    const passwordHanlder = (event) => {
        setPassword(event.target.value)
    }   
    const passwordConfirmHanlder = (event) => {
        setPasswordConfirm(event.target.value)
    }   

    const formHanlder = async(e) => {
        e.preventDefault()
        localStorage.clear();
        let is_checked = document.getElementById('provider_check').checked
        const data = {
            'username':username,
            'password':password,
            'password2':passwordConfirm,
        }
        const response = await axios.post(`Register/`, data)
        if(response){
            localStorage.setItem('token', response.data.Token);
            axios.defaults.headers.common['Authorization'] = `Token ${response.data.Token}`
            if(is_checked){
                navigate('/create-provider')
            }else{
                navigate('/home')
            }
        }
    }
    return (
        <>
            <div className="form-container">
                <form action="" className="form">
                    <h1 className="title">START FOR FREE</h1>
                    <h4 className="description">Create a new account</h4>
                    <input type="text" onChange={usernameHandler} placeholder="Username"/>
                    <input type="password" onChange={passwordHanlder} placeholder="Password"/>
                    <input type="password" onChange={passwordConfirmHanlder} placeholder="Confirm Password"/>
                    <label className="provider-check-container">
                        <input type="checkbox" id="provider_check"/>
                        Are You A Provider?
                    </label>
                    <button className="btn" onClick={formHanlder}>
                        Create account
                    </button>
                    <h5 className="description">Already have an account?  <Link to="/login" className="title">Sign In</Link></h5>
                </form>
                <div className="image-container">
                    <img src={RegisterImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Register
