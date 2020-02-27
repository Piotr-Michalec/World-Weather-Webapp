import React,{useEffect, useState} from 'react';

const Weather = props =>{

    const [weatherData, updateWeatherData] = useState({weather: ''})
//when coordinates in state updates, fetch data from dark sky api
    useEffect(()=>{
      getWeatherInfo();
    });
 
console.log('aa')
const getWeatherInfo = () =>{
    

   
    const api = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/API_KEY/${props.lat},${props.lng}`;
    fetch(api)
      .then(response=>{
        return response.json();
    })
      .then(data=>{
       //updateWeatherData(data)
       console.log(data.currently.temperature)
       
    });
}; 
    return(
        <div>
        <h1>weather</h1>
        <h1>{props.lat}</h1>
          <h1>{props.lng}</h1>
          
          <button onClick = {getWeatherInfo}>bbb</button>
          </div>
    );
};

export default Weather;