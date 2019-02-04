import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
import './App.css';


class App extends Component {
  
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
