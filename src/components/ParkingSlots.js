import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { useParams } from 'react-router';
import SearchIcon from '../images/Icons/Search.svg'
import {Link} from 'react-router-dom'

const ParkingSlots = () => {
    const {id} = useParams()
    const [slots, setSlots] = useState([])

    useEffect(() => {
        async function getSlots() {
          let response = await fetch(`api/parkingPlaceIndex/${id}/`)
          response = await response.json()
          setSlots(response)
        }
        
        getSlots()
      }, [])

    return (
        <>
            <div className="slots-container">
                {slots.length > 0 && slots.map((slot)=>(
                    <Link to={`slot-page/${slot.id}`} key={slot.id} className="btn slot">
                        <div className="top">{slot.id}</div>
                        <div className="bot">SLOT</div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default ParkingSlots