import React from 'react';
import Weather from './Weather/Weather';


const Display = props =>{
    return(
      <div className = 'h-100'>
          <Weather lat={props.coordinates.lat} lng={props.coordinates.lng} changeBackground = {props.changeBackground}/>
      </div>
    );
};
export default Display;