import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './components/Map/Map';
import Display from './components/Display Panel/Display';
//temporary location, use geolocation later
const defLat = 50.258839;
const defLng = 20.616403;


const style = {
  height: '100vh',
  width: '50vh',
  color: 'green' 
}

const displayCompStyle = {
  height: '40vh'
}

const mapCompStyle = {
  height: '60vh',
  width: '100%'
}

function App() {

  const [coordinates, updateCoordinates] = useState({lat:defLat,lng:defLng});

  const updateCoordinatesFromMap = (clickCoordinates) =>
  {updateCoordinates({lat:clickCoordinates.latLng.lat(),lng:clickCoordinates.latLng.lng()})};

  return (
      <main className = "container "  >
        <div className = 'border border-danger' style={displayCompStyle}>
          <Display coordinates={coordinates}/>
        </div>
        <div className = 'border border-primary' style = {mapCompStyle} >
          <MapComponent updateCoordinatesFromMap = {updateCoordinatesFromMap} />
        </div>   
      </main>
  );
}

export default App;
