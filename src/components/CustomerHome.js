import React, {useState} from 'react'
import SearchIcon from '../images/Icons/Search.svg'
import LocationIcon from '../images/Icons/Location.svg'
import axios from '../axios'
import {Link} from 'react-router-dom'

const CustomerHome = () => {
    const [search, setSearch] = useState('')
    const [locations, setLocations] = useState([])
    
    const searchHandler = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    const clickSearchHandler = async(e) => {
        e.preventDefault()
        const response = await axios.get(`api/parkingPlaceSearch/${search}/`)

        if(response){
            setLocations(response.data.data)
        }
    }
    return (
        <>
            <div className="input-container">
                <img src={SearchIcon} alt="" /> 
                <input type="text" onChange={searchHandler} placeholder="Where Do You Want To Go?"/>
                <button className="btn" onClick={clickSearchHandler}>
                    Search
                </button>
            </div>
            <div className="results-container">
                {locations.length > 0 && locations.map((location)=> (
                    <Link to={`slots/${location.id}`} key={location.id} className="btn result">
                        <img src={LocationIcon} alt="" />
                        <div className="text-container">
                            <h1 className="title">{location.name}</h1>
                            <h4 className="description">{location.city}, {location.street}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CustomerHome
