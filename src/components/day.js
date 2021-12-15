import snow from '../images/snowy.png';
import cloud from '../images/cloudy.png'
import rain from '../images/rainy.png'
import low from '../images/low.svg'
import precipitation from '../images/precipitation.svg'
import React from 'react';
import './day.css';

const Day = ({day}) => {
    const weatherToday = day.weather[0]['main'].toLowerCase();
    let imgSrc = '';
    switch (weatherToday) {
      case 'rain':
        imgSrc = rain;        
        break;
        case 'snow':
          imgSrc = snow;
          break;
          case 'cloud':
            imgSrc = cloud;
            break;    
      default:
        break;
    }

    return (
      <div className={'day ' + weatherToday}>
        <img src={imgSrc} className='icon' height={'120px'} width={'120px'} />
        <div className='temperature'>{Math.round(day.temp['day']) + '°'}</div>
        <div className='content'>
          <div>
            <img src={precipitation} className='precipitation' />{' '}
            {day.pop * 100 + '%'}
          </div>
          <div>
            <img src={low} className='low' /> {Math.round(day.temp['min'])}
          </div>
        </div>
      </div>
    );
};

export default Day;