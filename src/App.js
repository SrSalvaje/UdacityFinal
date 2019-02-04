import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import MapContainer from "./components/Map";
import './App.css';





class App extends Component {
  
  
  render() {
    
    return (
      <div className="App">
        <h1 className="helloWorld">My Malmö</h1>
        <MapContainer/>
      </div>
      

    );
  }
}


export default App;
