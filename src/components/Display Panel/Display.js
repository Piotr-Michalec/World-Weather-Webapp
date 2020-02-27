import React from 'react';
import Weather from './Weather';

const Display = props =>{
    return(
      <div>
          
          <Weather lat={props.coordinates.lat} lng={props.coordinates.lng}/>
      </div>
    );
};
export default Display;