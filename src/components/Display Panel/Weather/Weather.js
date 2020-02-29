import React,{useEffect, useState} from 'react';
import WeatherPanel from './WeatherPanel';


const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const Weather = props =>{

const [weatherData, updateWeatherData] = useState({weather: {}})
//when coordinates in state updates, fetch data from dark sky api
    useEffect(()=>{
      getWeatherInfo();
    },[props.lat,props.lng]);
 
console.log('state',weatherData);
const getWeatherInfo = () =>{
    
console.log('get')
   
    const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${weatherApiKey}/${props.lat},${props.lng}`;
    fetch(api)
      .then(response=>{
        return response.json();
    })
      .then(data=>{
       updateWeatherData(data.currently) 
    });
}; 
    return(
        <div className = 'h-100'>
          <WeatherPanel weatherData={weatherData}/>
       </div>
    );
};

export default Weather;