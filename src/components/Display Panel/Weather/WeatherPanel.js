import React from 'react';
import IconComp from './IconComp';
import SmalData from './SmallData';

const WeatherPanel = props =>{
    return(
        <div className = 'container-fluid h-100 d-flex flex-column justify-content-around'>
            <div className = 'd-flex justify-content-center'>
                <div>
                <h1> {props.weatherData.icon} </h1>
                
                </div>
            </div>   
                <div className = 'd-flex flex-row justify-content-around'>
                    <div className='col'>
                      <SmalData type = {'Temp *C'} value = {Math.round((props.weatherData.temperature-32)*5/9)}/>
                    </div>
                    <div className='col'>
                      <SmalData type = {'Wind'} value = {props.weatherData.windSpeed}/>
                    </div>
                    <div className='col'>
                      <SmalData type = {'Pret'} value = {props.weatherData.precipIntensity}/>
                    </div>
                </div>
        </div>
    );
};

export default WeatherPanel;