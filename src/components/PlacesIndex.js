import React, {useState} from 'react'
import axios from '../axios'
import { useParams } from 'react-router';
import LocationIcon from '../images/Icons/Location.svg'
const PlacesIndex = () => {
    const {id} = useParams()
    const [search, setSearch] = useState('')
    const [places, setPlaces] = useState([])
    
    const searchHandler = async(event) => {
        setSearch(event.target.value)

        const response = await axios.get(`parkingPlaceSearch/${search}/`)

        if(response){
            setPlaces(response.data.data)
        }
    }
    return (
        <>
            <div className="places-container results-container">
                <h1 className="title">ALL YOUR PLACES:</h1>
                {places.length > 0 ? places.map((place) =>(
                    <div key={place.id} className="btn result">
                        <img src={LocationIcon} alt="" />
                        <div className="text-container">
                            <h1 className="title">{place.name}</h1>
                            <h4 className="description">{place.city}, {place.street}</h4>
                        </div>
                    </div>
                ))
                :
                (
                    <h1 className="title">Nothing found...</h1>
                )
                }
            </div>
        </>
    )
}

export default PlacesIndex
