import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapComponent from './components/Map/Map';
import Display from './components/Display Panel/Display';

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
  return (
      <main className = "container "  >
        <div className = 'border border-danger' style={displayCompStyle}>
          <Display/>
        </div>
        <div className = 'border border-primary' style = {mapCompStyle} >
        <MapComponent/>
        </div>   
      </main>
  );
}

export default App;
