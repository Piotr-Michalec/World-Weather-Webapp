import React, {useState} from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//default map position
const defLat = 50.258839;
const defLng = 20.616403;
const mapApiKey = `${process.env.REACT_APP_MAP_API_KEY}`;

const MapComponent = compose(
  withProps({
    googleMapURL:
     `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${mapApiKey}`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `85%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{lat: defLat,lng: defLng }}
    //when map is clicked, get click coordinates and pass them to state in App.js
    onClick={(e)=>{props.updateCoordinatesFromMap(e)}}
    > 
  </GoogleMap>
  
)


    
  
  

export default MapComponent;