import React, { Component } from 'react';
import styles from './Map.css';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Markers from "./Marker.js"

/* const mapStyles = {
    width: '100%',
    height: '100%'
  }; */

export class MapContainer extends Component {
  
  
    render() {
    return (
   
      <Map
        google={this.props.google}
        zoom={14}
        style={styles.container}
        initialCenter={{
         lat: 55.609928,
         lng: 12.999832
        }}
      >
        <Markers
        showingInfoWindow={this.props.showingInfoWindow}
        activeMarker={this.props.activeMarker}
        selectedPlace={this.props.selectedPlace}
        onClose={this.props.onClose}
        onMarkerClick={this.props.onMarkerClick}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper(
 (props)=>({
    apiKey: "AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"
 }
))(MapContainer);