import React from 'react'
import {Link} from "react-router-dom";

const ProviderHome = () => {
    return (
        <>
            <div className="provider-home-container">
                <h1 className="title">CHOOSE ONE</h1>
                <Link to="/provider-places" className="btn">
                        See all my places
                </Link>
                <Link to="/create-place" className="btn">
                        Create a new place
                </Link>
            </div>
        </>
    )
}

export default ProviderHome
