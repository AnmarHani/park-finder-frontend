import React, {useEffect} from 'react'
import HomeImage from '../images/Home-Image.png'
import {Link, useNavigate} from "react-router-dom";
import axios from '../axios'
const Home = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="home-container">
                <div className="home-left">
                    <div className="left-text">
                        <h1>Providing Parking Solutions</h1>
                        <h4>
                            We have solved most parking providers problems 
                        <br />
                            in addition of providing good experience for customers
                        </h4>
                    </div>
                    <Link to="/login" className="btn btn-left">
                        START NOW
                    </Link>
                </div>
                <div className="home-right">
                    <div className="right-image">
                        <img src={HomeImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
