import React, { Component } from 'react';
//import {Route} from "react-router-dom";
import Map from "./components/Map";
import Searchbar from "./components/Searchbar"
import './App.css';



class App extends Component {
  state={
    markers:[],
    venues:[],
    filteredVenues:[],
    search:"", 
    error:false,
    categories:[
    {food:"food"}, {drinks:"drinks"}, 
    {coffee:"coffee"}, {shops:"shops"}, {arts:"arts"}, 
    {outdoors:"outdoors"}, {sights:"sights"}, {trending:"trending"}, 
    {topPicks:"topPicks"}
    ]  
  }
  
  componentDidMount(){
    this.fetchVenues()
}
  

   fetchVenues = ()=> {
    const parameters={
      query:"food,drinks",
      near:"Malmo,Sweden",
      limit:"40",
      v:"20190204"

    },
    client_id="K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
    client_secret="O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V";
    
    let baseUrl='https://api.foursquare.com/v2/venues/';
    let url = baseUrl + `explore?client_id=${client_id}&client_secret=${client_secret}&v=${parameters.v}&near=${parameters.near}}&limit=${parameters.limit}&section=${parameters.query}`;
    
    fetch(url)
    .then(response=>response.json())
    .then(data=> {
      this.setState({
        venues:data.response.groups[0].items
      }); 
    })
    .catch(error=>console.log(error))
  }
  addMarkerToSate=(marker)=>{
    this.setState({markers:[...this.state.markers,marker]});
  }
  
  clickOnListItem=(vId)=>{
    const markerEquivalent=this.state.markers.filter(marker=>vId===marker.id)[0];
    //makes the marker bounce
    markerEquivalent.setAnimation(window.google.maps.Animation.BOUNCE);
    //for three seconds
    window.setTimeout(function(){
      markerEquivalent.setAnimation(null);
    }, 3000);

  }
  
  render() {
    return (
      <div className="App">
        <h1>My Malmö</h1>
        <main className="container">
           <Searchbar
           venues={this.state.venues}
           filteredVenues={this.filteredVenues}
           clickOnListItem={this.clickOnListItem}
          />  
          <Map
          fetchVenues={this.fetchVenues}
          venues={this.state.venues}
          filteredVenues={this.filteredVenues}
          addMarkerToState={this.addMarkerToSate}
          />
        </main>
      </div>
      

    );
  }
}


export default App;
