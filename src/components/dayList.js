import React from 'react';
import Day from "./day";
import './daylist.css';

const DayList = ({days}) => {
    // console.log(days);
    return (<div className='wrapper'>
        {days.map(day => {
            return <Day day={day} />        
        })}
    </div>)
};

export default DayList;
