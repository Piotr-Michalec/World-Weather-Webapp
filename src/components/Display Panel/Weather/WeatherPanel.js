import React from 'react';
import IconComp from './IconComp';
import SmallData from './SmallData';
import AddressFinder from '../../Map/AddressFinder';
import { findByLabelText } from '@testing-library/react';
import DarkSkyImg from  '../../../media/poweredby-oneline-darkbackground.png';
const style = {
  backgroundColor: 'rgba(59, 49, 50,0.5)',
}

const WeatherPanel = props =>{
    return(
        <div className = 'container-fluid  h-100 ' style = {style}>
        <div className = '' style = {{height: '4vh'}}>
          <a href='https://darksky.net/poweredby/' >
            <img className = 'h-100' src={DarkSkyImg} alt={'darksky link'}/>
          </a>
        </div>
           <div className = 'row justify-content-center'> 
             <IconComp value = {props.weatherData.icon}/>  
           </div>      
           <div className ='row d-flex flex-column  justify-content-center'>
              <SmallData type = {'Summary'} value = {props.weatherData.summary}/>
              <SmallData type = {'Temp'} value = {Math.round(props.weatherData.temperature)+' °C'}/>
              <SmallData type = {'Wind'} value = {props.weatherData.windSpeed+' m/s'}/>
              <SmallData type = {'Pressure'} value = {(props.weatherData.pressure)+' hPa'}/>
              <AddressFinder lat = {props.lat} lng = {props.lng}/>
            </div> 
        </div>
    );
};

export default WeatherPanel;