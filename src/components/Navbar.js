import React from 'react'
import LogoIcon from '../images/Icons/Logo.svg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <nav>
                <img src={ LogoIcon} alt="" />
            </nav>
        </>
    )
}

export default Navbar
