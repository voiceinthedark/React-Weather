import snowy from '../images/snowy.png';
import cloudy from '../images/cloudy.png'
import low from '../images/low.svg'
import precipitation from '../images/precipitation.svg'
import React from 'react';
import './day.css';

const Day = ({day}) => {
    // console.log(day);
    return (
      <div className={'day ' + (day.weather[0]['main']).toLowerCase()}>
        <img src={snowy} className='icon' height={'75px'} width={'120px'} />
        <div className='temperature'>{day.temp['day']}</div>
        <div className='content'>
          <div>
            <img src={precipitation} /> {day.pop}
          </div>
          <div>
            <img src={low} /> {day.temp['min']}
          </div>
        </div>
      </div>
    );
};

export default Day;