import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
//import Marker from "./components/Markers"
import './App.css';
import axios from 'axios'


class App extends Component {
  state={
    markers:[]
  }
  
  componentDidMount(){
    //this.fetchVenues()
    this.axiosVenues()
  }

  //this funcytion uses the fetch api and throws a cors error
   fetchVenues = ()=>{
    const 
      client_id="K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
      client_secret="O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V",
      query="food",
      near="Malmo,Sweden",
      //limit="10",
      v="20190204";
     
    const endPoint =`https://api.foursquare.com/v2/venues/explore?client_id=${client_id}&client_secret=${client_secret}&query=${query}&near=${near}&v=${v}`;
    fetch(endPoint, {
      
      mode:"cors",
      method:"GET",
      headers:{
        // Authenthication:"user",
         'Access-Control-Allow-Origin':'*'
       },
    }).then(response=>(console.log(response)))
    .catch(error=>console.log(error))

  } 
  /* componentDidMount(){
    this.getFoursquareVenues()
  } */

  //this function uses axios and works
  axiosVenues = () => {
    const apiEndpoint = "https://api.foursquare.com/v2/venues/explore?"
    const foursquareParameters = {
        client_id: "K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
        client_secret: "O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V",
        query: "food",
        near: "Malmo, Sweden",
        v: 20182507
    }

    axios.get(apiEndpoint + new URLSearchParams(foursquareParameters))
        .then(response => {
            
            console.log(response)
        })
        .catch(error => {
            alert("Error: Couldn't retrieve data from Foursquare.")
            console.log(`An error occurred: ${error}`)
        })
}

  
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
