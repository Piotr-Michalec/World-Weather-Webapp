
import React, {useState,useEffect} from 'react';
import Skycons from 'react-skycons';


const IconComp = props => {
 console.log('icon', props)
  const[iconType, setIconType]=useState('');
  

 useEffect(()=>{
  let currentIcon = props.value.replace(/-/g, "_").toUpperCase();
   setIconType(currentIcon)
 },[props])

 
console.log('ccc',iconType, typeof(iconType))

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