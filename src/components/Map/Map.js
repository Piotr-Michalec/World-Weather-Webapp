import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
//default map position
const defLat = 50.258839;
const defLng = 20.616403;
const position =0;

const MyMapComponent = compose(
  withProps({
    googleMapURL:
     `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=API_KEY`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{lat: defLat,lng: defLng }}
    onClick={(e)=>handleClick(e)}>
    
  </GoogleMap>
  
)

//if user clicks the map ,get lat and lng of the click position 
const handleClick = (e) =>{
  console.log(e.latLng);
}

const MapComponent = () =>{
  return (
      <MyMapComponent/>
    )
  }

export default MapComponent;