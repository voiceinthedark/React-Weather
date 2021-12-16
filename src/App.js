import DayList from './components/dayList';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

function App() {
  const [weather, setWeather] = useState([]);

  const API_key =
    process.env.JSCHALLENGE08_API_KEY || 'b3db22618f1670545706465f3df93733';
  const LATITUDE = process.env.LATITUDE || -33.86882;
  const LONGITUDE = process.env.LONGITUDE || 151.20929;
  // console.log(API_key);


  useEffect(() => {
    axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${LATITUDE}&lon=${LONGITUDE}&exclude=current,minutely,hourly,alerts&appid=${API_key}&units=metric`
    ).then((response, error) => {
      console.log(response.data);
      const { daily } = response.data;
      setWeather(daily);
    }).catch((error) => {
      console.log(error);
    });
    
  }, []); 

  return (
    <div className="App">
      <p>LATITUDE: {LATITUDE}</p>      
      <p>LONGITUDE: {LONGITUDE}</p>
      <p>API: {API_key}</p>
      {/* {console.log(weather)} */}
      <DayList days={weather} />
    </div>
  );
}

export default App;
