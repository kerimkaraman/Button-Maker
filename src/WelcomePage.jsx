import React from 'react';
import './welcome.css';
import BarLoader from "react-spinners/BarLoader";

function WelcomePage() {

    return (
        <div className='welcome'>
            <div className='wrapper'>
                <BarLoader 
                color="#DCDDDD"
                height={20}
                width={350} />
            </div>
        </div>
    )
}

export default WelcomePage