import React, {useState} from 'react';
import './App.css';
import MapComponent from './components/Map/Map';
import Display from './components/Display Panel/Display';

//backgrounds
import clearDay from '../src/media/backgrounds/clear-day.jpg';
import cloudy from '../src/media/backgrounds/cloudy.jpg';
import clearNight from '../src/media/backgrounds/clear-night.jpg';
import fog from '../src/media/backgrounds/fog.jpg';
import partlyCloudyNight from '../src/media/backgrounds/partly-cloudy-night.jpg';
import rain from '../src/media/backgrounds/rain.jpg';
import sleet from '../src/media/backgrounds/sleet.jpg';
import snow from '../src/media/backgrounds/snow.jpg';
import wind from '../src/media/backgrounds/wind.jpg';
import partlyCloudyDay from '../src/media/backgrounds/partly-cloudy-day.jpg';

//temporary location, use geolocation later
const defLat = 51.4934;
const defLng = 0.0098;


const mapCompStyle = {
 // height: '40%',

  
}


function App() {
 
  const [background, setBackground] = useState (clearDay);
  const [coordinates, updateCoordinates] = useState({lat:defLat,lng:defLng});

  const updateCoordinatesFromMap = (clickCoordinates) =>{
    updateCoordinates({lat:clickCoordinates.latLng.lat(),lng:clickCoordinates.latLng.lng()})};

  let style = {
    height: '100vh',
    width: '100vw',
    backgroundColor: background,
    backgroundImage : `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: '1s'
  }

  const changeBackground = weatherInfo =>{
    console.log('change backgr' ,weatherInfo.icon )
    switch(weatherInfo.icon){
      case 'clear-day':
        setBackground(clearDay);
        break;
      case 'partly-cloudy-day':
        setBackground(partlyCloudyDay)
        break;
      case 'cloudy':
        setBackground(cloudy);
        break;
      case 'clear-night':
        setBackground(clearNight);
        break;
      case 'rain':
        setBackground(rain);
        break;
      case 'snow':
        setBackground(snow);
        break;
      case 'sleet':
        setBackground(sleet);
        break;
      case 'wind':
        setBackground(wind);
        break;
      case 'fog':
        setBackground(fog);
        break;
      case 'partly-cloudy-night':
        setBackground(partlyCloudyNight);
        break;
      default:
        console.log('no wallpaper')


    }
   
  }

  return (
      <main className = "container-fluid p-0 align-content-center " style = {style} >
       
        <div className = '' >
          <Display coordinates={coordinates} changeBackground = {changeBackground}/>
        </div>
        <div className = 'map-component' style={mapCompStyle} >
        <MapComponent updateCoordinatesFromMap = {updateCoordinatesFromMap} />
        
        </div> 
       
      </main>
  );
}

export default App;
