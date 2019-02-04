import React, { Component } from 'react';
//import styles from './Map.css';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import '../App.css';
//import Markers from "./Marker.js"

/* const mapStyles = {
    width: '100%',
    height: 'auto'
  }; */
  
export class MapContainer extends Component {

    
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
        onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
        };

   

    render(){
    
          
        
        return(
            <Map 
            google={this.props.google} 
            zoom={14.5}
            //style={mapStyles}
            initialCenter={{
                lat:55.610023, 
                lng:13.000210
            }}
            >
            {/* //add function to add markers here */}
            <Marker
                onClick={this.onMarkerClick}
                name={'Malmö Central Station'}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
                <div>
                    <h4>{this.state.selectedPlace.name}</h4>
                </div>
            </InfoWindow>
                
            {/* end marker adding code here */}
            
            </Map>

        )
    }
}

 const LContainer = (props) => (
    <div  className="myMapCont" >Hello</div>
  );

/* export default GoogleApiWrapper({
    apiKey: ("AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"),
    LoadingContainer:LoadingContainer
})( MapContainer);  */



  

export default GoogleApiWrapper(
    (LContainer) => ({
      apiKey: ("AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"),
      LoadingContainer:LContainer
    }
  ))(MapContainer)