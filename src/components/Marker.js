import React, { Component } from 'react';
import {InfoWindow, Marker } from 'google-maps-react';

 class Markers extends Component {
  
  
    render() {
    return (
    <div className="markers">
        <Marker
          onClick={this.onMarkerClick}
          name={'Malmö Central'}
        />
        <InfoWindow
          marker={this.props.activeMarker}
          visible={this.props.showingInfoWindow}
          onClose={this.props.onClose}
        >
          <div>
            <h4>{this.props.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </div>
    );
  }
}

export default Markers