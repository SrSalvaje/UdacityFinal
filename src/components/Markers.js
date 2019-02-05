/* import React, { Component } from 'react';
//import {Route} from "react-router-dom";
//import Map from "";
import '../App.css';



class Marker extends Component {

    componentDidMount(){
        this.createMarker()
    }
  
    createMarker=()=>{
        let marker = new window.google.maps.Marker({
            position: {lat: 55.609126, lng: 13.000811},
            map: this.props.map,
            title: 'Central Station'
          });
    }


  
  render() {
    
    return (
        <div className="marker">
        
        </div>
        
      
      

    );
  }
}


export default Marker;
/* Client ID
K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K
Client Secret
O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V 
GET https://api.foursquare.com/v2/venues/explore

*/ */