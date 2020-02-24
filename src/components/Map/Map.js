import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const lat = 50.258839;
const lng = 20.616403;
const position =0;

const MyMapComponent = compose(
  withProps({
    googleMapURL:
     `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=KEY_HERE`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat, lng }}>
    
  </GoogleMap>
)
const handleClick = () =>{
  console.log('click');
}

class MapComponent extends React.PureComponent {


  render() {
    return (
      <MyMapComponent/>
    )
  }
}
export default MapComponent;