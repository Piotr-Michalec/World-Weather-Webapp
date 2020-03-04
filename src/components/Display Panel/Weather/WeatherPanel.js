import React from 'react';
import IconComp from './IconComp';
import SmalData from './SmallData';

const WeatherPanel = props =>{
  console.log('wp',props)
    return(
        <div className = 'container-fluid h-100 d-flex flex-column justify-content-around'>
            <div className = 'd-flex justify-content-center'>
                <div>
                <IconComp value = {props.weatherData.icon}/>
                </div>
            </div>   
                <div className = 'd-flex flex-row justify-content-around'>
                    <div className='col'>
                      <SmalData type = {'Temp'} value = {Math.round(props.weatherData.temperature)+' *C'}/>
                    </div>
                    <div className='col'>
                      <SmalData type = {'Wind'} value = {props.weatherData.windSpeed+' m/s'}/>
                    </div>
                    <div className='col'>
                      <SmalData type = {'Humidity'} value = {(props.weatherData.humidity)*100+' %'}/>
                    </div>
                </div>
        </div>
    );
};

export default WeatherPanel;