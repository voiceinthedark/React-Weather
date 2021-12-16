import DayList from './components/dayList';
import Location from './components/location';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

function App() {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState('beirut');
  const [errorMessage, setErrorMessage] = useState('');

  const API_key =
    process.env.JSCHALLENGE08_API_KEY || 'b3db22618f1670545706465f3df93733';
  let latitude = process.env.LATITUDE || 33.297198534793445;
  let longitude = process.env.LONGITUDE || 35.3715812867322;
  // console.log(API_key);


  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        console.log("🚀 ~ file: App.js ~ line 24 ~ navigator.geolocation.getCurrentPosition ~ latitude", latitude)
        longitude = position.coords.longitude;        
        console.log("🚀 ~ file: App.js ~ line 26 ~ navigator.geolocation.getCurrentPosition ~ longitude", longitude)

        axios.get(
          `https://us1.locationiq.com/v1/reverse.php?key=pk.859c30c27f77cc28a180244b2fb7a61b&lat=33.29764232058696&lon=35.3716113991714&format=json`
        ).then((response) => {
          setLocation(response.data.display_name);
          console.log("🚀 ~ file: App.js ~ line 32 ~ ).then ~ response.data.display_name", response.data.display_name)
        }).catch((error) => {
          console.log(error);
        });
        
      },
        (error) => {
          setErrorMessage(error.message);
        });
    }

    axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${API_key}&units=metric`
    ).then((response) => {
      console.log(response.data);
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
