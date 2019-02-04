import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
import './App.css';





class App extends Component {
  state = {
    showingInfoWindow: false,  //Hides/shows  infoWindow
    activeMarker: {},          //Shows active marker on click
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
  
  render() {
    return (
      <div className="App">
        <h1 className="helloWorld">Hello Friends</h1>
        
          
          <Map 
          showingInfoWindow={this.state.showingInfoWindow}
          activeMarker={this.state.activeMarker}
          selectedPlace={this.state.selectedPlace}
          onClose={this.onClose}
          onMarkerClick={this.onMarkerClick}
          />
          
        
      </div>
      

    );
  }
}


export default App;
