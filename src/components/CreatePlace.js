import React, {useState} from 'react'
import axios from '../axios'
import  { useNavigate } from 'react-router-dom'

const CreatePlace = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [hourly, setHourly] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [slots, setSlots] = useState('')

    const nameHanlder = (event) => {
        setName(event.target.value)
    }   
    const locationHanlder = (event) => {
        setLocation(event.target.value)
    }
    const hourlyHanlder = (event) => {
        setHourly(event.target.value)
    }
    const cityHanlder = (event) => {
        setCity(event.target.value)
    }
    const countryHanlder = (event) => {
        setCountry(event.target.value)
    }
    const streetHanlder = (event) => {
        setStreet(event.target.value)
    }
    const slotsHanlder = (event) => {
        setSlots(event.target.value)
    }

    const formHanlder = async(e) => {
        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('token')}`
        const data = {
            'name':name,
            'place_location':location,
            'hourly_charge':hourly,
            'city':city,
            'country':country,
            'street':street,
            'parking_slot_num':slots,
        }
        const response = await axios.post(`api/CreateParkingPlace/`, data)
        if(response){
            navigate('/provider-places')
        }
    }
    return (
        <>
          <div className="form-container">
                <form action="" className="form">
                    <h1 className="title">CREATE A NEW PLACE</h1>
                    <input type="text" onChange={nameHanlder} placeholder="Place Name*"/>
                    <input type="text" onChange={locationHanlder} placeholder="Google Maps Location*"/>
                    <input type="text" onChange={hourlyHanlder} placeholder="Hourly Charge*"/>
                    <input type="text" onChange={cityHanlder} placeholder="City"/>
                    <input type="text" onChange={countryHanlder} placeholder="Country"/>
                    <input type="text" onChange={streetHanlder} placeholder="Street"/>
                    <input type="text" onChange={slotsHanlder} placeholder="How many parking slots for this place?"/>
                    <button className="btn" onClick={formHanlder}>
                        Create Place
                    </button>
                </form>
            </div>  
        </>
    )
}

export default CreatePlace
