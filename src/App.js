import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
//import Marker from "./components/Markers"
import './App.css';
import axios from 'axios'


class App extends Component {
  state={
    markers:[],
    venues:[],
    filteredVenues:[]
  }
  
  componentDidMount(){
    this.fetchVenues()
    //this.axiosVenues()
  }

  //this funcytion uses the fetch api and throws a cors error
   fetchVenues = ()=> {
    const parameters={
      query:"food",
      near:"Malmo,Sweden",
      limit:"20",
      v:"20190204"

    },
    client_id="K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
    client_secret="O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V";
    
    let baseUrl='https://api.foursquare.com/v2/venues/';
    let url = baseUrl + `explore?client_id=${client_id}&client_secret=${client_secret}&v=${parameters.v}&near=${parameters.near}}&limit=${parameters.limit}&query=${parameters.query}`;
      
    
    fetch(url)
    .then(response=>response.json())
    .then(data=> console.log(data))
    .catch(error=>console.log(error))
  }

  
 
  //this function uses axios and works
  

  
  render() {
    return (
      <div className="App">
        <h1>My Malmö</h1>
        <main className="container">
          <Map/>
        </main>
      </div>
      

    );
  }
}


export default App;
