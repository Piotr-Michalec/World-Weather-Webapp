import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"
//default map position
const defLat = 51.4934;
const defLng = 0.00;
const mapApiKey = `${process.env.REACT_APP_MAP_API_KEY}`;

const MapComponent = compose(
  withProps({
    googleMapURL:
     `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{lat: defLat,lng: defLng }}
    //when map is clicked, get click coordinates and pass them to state in App.js
    onClick={(e)=>{props.updateCoordinatesFromMap(e)}}
    > 
  </GoogleMap>
  
)


    
  
  

export default MapComponent;
