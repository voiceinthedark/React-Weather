import React from 'react';
import Day from "./day";
import './daylist.css';

const DayList = ({days}) => {
    // console.log(days);
    return (<div className='wrapper'>
        {days.map((day, i) => {
            return <Day key={i} day={day} />        
        })}
    </div>)
};

export default DayList;
