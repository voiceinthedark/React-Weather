import snow from '../images/snowy.png';
import cloud from '../images/cloudy.png';
import rain from '../images/rainy.png';
import drizzle from '../images/drizzle.png';
import clear from '../images/sunny.png';
import thunderstorm from '../images/thunderstorm.png';
import weather from '../images/weather.png';
import low from '../images/low.svg';
import precipitation from '../images/precipitation.svg';
import React from 'react';
import DayWeek from './dayWeek';
import './day.css';

  const Day = ({ day }) => {
  const dateTime = new Date(+(day.dt) * 1000);
  // console.log(dateTime, day.dt);
  const weatherToday = day.weather[0]['main'].toLowerCase();
  let imgSrc = '';
  switch (weatherToday) {
    case 'rain':
      imgSrc = rain;
      break;
    case 'snow':
      imgSrc = snow;
      break;
    case 'clouds':
      imgSrc = cloud;
      break;
    case 'drizzle':
      imgSrc = drizzle;
      break;
    case 'clear':
      imgSrc = clear;
      break;
    case 'thunderstorm':
      imgSrc = thunderstorm;
      break;
    default:
      imgSrc = weather;
      break;
  }

  return (
    <div className='day-wrapper'>
      <DayWeek day={dateTime.getDay()} date={dateTime.getDate()} />
      <div className={'day ' + weatherToday}>
        <img src={imgSrc} className='icon' height={'120px'} width={'120px'} />
        <div className='temperature'>{Math.round(day.temp['day']) + '°'}</div>
        <div className='content'>
          <div>
            <img src={precipitation} className='precipitation' />{' '}
            {Math.round(day.pop) * 100 + '%'}
          </div>
          <div>
            <img src={low} className='low' /> {Math.round(day.temp['min'])}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day;
