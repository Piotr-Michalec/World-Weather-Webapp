
import React, {useState,useEffect} from 'react';
import Skycons from 'react-skycons';


const IconComp = props => {
  useEffect(()=>{
    let currentIcon = props.value.replace(/-/g, "_").toUpperCase();
     setIconType(currentIcon)
   },[props])
  const[iconType, setIconType]=useState('');
    return(
        <div>
        <Skycons 
        color='white' 
        icon={iconType} 
        autoplay={true}
      />
      </div>
    );
};

export default IconComp;