import React, { Component } from 'react';
import '../App.css';


class Map extends Component {
    
    //Google´s example
    initMap=()=> {
       
        const map = new google.maps.Map(document.getElementById("map"), {
            center:{lat: -34.397, lng: 150.644},
            zoom:8
        })
      }

  render() {
    return (
      <div id="map"></div>
      

    );
  }
}

  
export default Map;