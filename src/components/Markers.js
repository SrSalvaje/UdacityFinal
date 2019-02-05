import React, { Component } from 'react';
//import {Route} from "react-router-dom";
//import Map from "./components/Map";
import '../App.css';
import axios from "axios";


class Marker extends Component {
  state={
    markers:[]
  }
  
  render() {
    return (
        <div className="markerCont">

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

*/