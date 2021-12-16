import React from "react";
import './dayWeek.css';

const DayWeek = ({ day, date }) => {
    const dayOfWeek = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
    }
    return (
    <div className="date">
        <div className="day-name">{ dayOfWeek[day] }</div>
        <div className="day-week">{ date }</div>
    </div>
    );
};

export default DayWeek;