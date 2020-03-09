import React from 'react';
import IconComp from './IconComp';
import SmallData from './SmallData';
import AddressFinder from '../../Map/AddressFinder';
import { findByLabelText } from '@testing-library/react';

const style = {
  backgroundColor: 'rgba(59, 49, 50,0.5)',
}
const columnStyle = {
  height: '50%'
}
const rowStyle = {
 // height: '50%'
}

const WeatherPanel = props =>{
    return(
        <div className = 'container-fluid  h-100 ' style = {style}>
        <p>ssssaa</p>  
           <div className = 'row justify-content-center'> 
             <IconComp value = {props.weatherData.icon}/>  
           </div>      
           <div className ='row d-flex flex-column  justify-content-center'>
             <SmallData type = {'Temp'} value = {Math.round(props.weatherData.temperature)+' *C'}/>
              <AddressFinder lat = {props.lat} lng = {props.lng}/>
                    
                      <SmallData type = {'Summary'} value = {props.weatherData.summary}/>
                      <SmallData type = {'Wind'} value = {props.weatherData.windSpeed+' m/s'}/>
                   
                      <SmallData type = {'Pressure'} value = {(props.weatherData.pressure)+' hpa'}/>
                      <SmallData type = {'Time'} value = {(props.weatherData.time)}/>
                      </div>
        </div>
    );
};

export default WeatherPanel;