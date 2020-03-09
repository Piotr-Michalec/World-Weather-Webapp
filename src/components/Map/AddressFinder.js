import React,{useState} from 'react';
import SmallData from './../Display Panel/Weather/SmallData';

//gets the address from lat and lng coordinates
const mapApiKey = `${process.env.REACT_APP_MAP_API_KEY}`;

const AddressFinder = props =>{

    const [currentAddress, setCurrentAddress] = useState('address')
    const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${props.lat},${props.lng}&key=${mapApiKey}`;
        fetch(api)
          .then(response=>{
              return response.json();
          })
          .then(data=>{
                  setCurrentAddress(data.results[0].formatted_address)
          })
    return(   
        <SmallData type={'Address'} value = {currentAddress}/>
    );  
};

export default AddressFinder;