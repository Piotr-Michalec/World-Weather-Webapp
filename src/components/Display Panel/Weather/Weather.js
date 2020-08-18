import React,{useEffect, useState} from 'react';
import WeatherPanel from './WeatherPanel';

//gets weather data from darksky api, based on coordinates received from state in app.js
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;

const Weather = props =>{
 
const{lat, lng}=props;  


const [weatherData, updateWeatherData] = useState({icon:'CLOUDY',summary: 'Wait for it...'})
//when coordinates in state update, fetch data from dark sky api
    useEffect(()=>{
    
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
         const api = `${corsAnywhere}https://api.darksky.net/forecast/${weatherApiKey}/${props.lat},${props.lng}?units=si`;
         fetch(api)
           .then(response=>{
             return response.json();
         })
           .then(data=>{
            (updateWeatherData(data.currently))
            props.changeBackground(data.currently) //send weather data to changeBackground function in App.js
         })
         .catch(error=>updateWeatherData({icon:'CLOUDY',summary: 'Oops, something is wrong. Try again.'})
         ) 
    },[lat,lng]);

 
    return(
        <div className = 'h-100'>
          <WeatherPanel weatherData={weatherData} lat = {props.lat} lng = {props.lng}/>
       </div>
    );
};

export default Weather;