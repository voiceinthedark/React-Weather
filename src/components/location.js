import React from "react";
import './location.css';

const Location = ({ location }) => {
    let place = location.split(',')[0];
    return (
    <div className='location'>
        {place}
    </div>
    )
};

export default Location;