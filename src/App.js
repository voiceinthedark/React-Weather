import DayList from './components/dayList';
import Location from './components/location';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
require('dotenv').config({ path: `${__dirname}/.env` });
// const path = require('path');
// require('dotenv').config({ path: require('find-config')('.env') });
// const ck = require('ckey');
// require('dotenv').config();

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('beirut');
  const [errorMessage, setErrorMessage] = useState('');
  const [latitude, setLatitude] = useState(33.297198534793445);
  const [longitude, setLongitude] = useState(35.3715812867322);

  const API_key =
    process.env.REACT_APP_JSCHALLENGE08_API_KEY;
  const REACT_APP_GEO_API_KEY = process.env.REACT_APP_GEOCODING_API_KEY;
  // console.log(
  //   '🚀 ~ file: App.js ~ line 20 ~ App ~ GEO_API_KEY',
  //   REACT_APP_GEO_API_KEY
  // );  

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        // // console.log("🚀 ~ file: App.js ~ line 24 ~ navigator.geolocation.getCurrentPosition ~ latitude", latitude)
        setLongitude(position.coords.longitude);        
        // // console.log("🚀 ~ file: App.js ~ line 26 ~ navigator.geolocation.getCurrentPosition ~ longitude", longitude)
        
      },
        (error) => {
          setErrorMessage(error.message);
        });
    }

    axios
      .get(
        `https://us1.locationiq.com/v1/reverse.php?key=${REACT_APP_GEO_API_KEY}&lat=${latitude}&lon=${longitude}&format=json`
      )
      .then((response) => {
        setLocation(response.data.display_name);
        console.log(
          '🚀 ~ file: App.js ~ line 32 ~ ).then ~ response.data.display_name',
          response.data.display_name
        );
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${API_key}&units=metric`
    ).then((response) => {
      // console.log(response.data);
      const { daily } = response.data;
      setWeather(daily);
    }).catch((error) => {
      console.log(error);
    });
    
  }, []); 

  return (
    <div className="App">  
    <Location location={location} />    
      <DayList days={weather} />
    </div>
  );
}

export default App;
