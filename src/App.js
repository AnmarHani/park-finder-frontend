import React, {useEffect} from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import CustomerHome from "./components/CustomerHome";
import ParkingSlots from "./components/ParkingSlots";
import CreateProvider from "./components/CreateProvider";
import ProviderHome from "./components/ProviderHome";
import CreatePlace from "./components/CreatePlace";
import PlacesIndex from "./components/PlacesIndex";
import Slot from "./components/Slot";

import axios from './axios'
import './index.css';

import  { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/home" element={<CustomerHome />}/>
        <Route exact path="/slots/:id" element={<ParkingSlots />}/>
        <Route exact path="/slot-page/:id" element={<Slot />}/>
        <Route exact path="/create-provider" element={<CreateProvider />}/>
        <Route exact path="/provider-home" element={<ProviderHome />}/>
        <Route exact path="/create-place" element={<CreatePlace />}/>
        <Route exact path="/provider-places/:id" element={<PlacesIndex />}/>
      </Routes>
    </>
  );
}

export default App;
