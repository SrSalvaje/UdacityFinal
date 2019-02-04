import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <h1 className="helloWorld">Hello Friends</h1>
        
          
          <Map/>
        
      </div>
      

    );
  }
}


export default App;
