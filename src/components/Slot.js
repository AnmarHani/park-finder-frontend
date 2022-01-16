import React, {useState, useEffect} from 'react'
import axios from '../axios'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'

const Slot = () => {
    const {id} = useParams()
    const [data, setData] = useState({})

    useEffect(() => {
        async function getData() {
          let response = await fetch(`api/parkingPlaceIndex/${id}/`)
          response = await response.json()
          setData(response.data)
        }
        
        getData()
      }, [])

    return (
        <>
            <div className="form-container">
                <form action="" className="form">
                    <h4 className="title">Location:</h4>
                    <input type="text" value={data.parking_location} />
                    <button className="btn" onClick={() => alert("Thanks! Your ID is 192781622")}>
                        Appoint/Rent
                    </button>
                </form>
            </div>
        </>
    )
}

export default Slot
