import React, { Component } from 'react';
import Map from "./components/Map";
import Searchbar from "./components/Searchbar"
import './App.css';
import HamMenu from "./components/hamMenu"
import fouricon from "./img/pbf.png"
import glg from "./img/google.png"



class App extends Component {
  state={
    myTopPicks:null,
    markers:[],
    venues:[],
    filteredVenues:[],
    search:"", 
    error:false,
    categories:[
      {value:"topPicks"},
    {value:"food"}, {value:"drinks"}, 
    {value:"coffee"}, {value:"shops"}, {value:"arts"}, 
    {value:"outdoors"}, {value:"sights"}, {value:"trending"}
    
    ]  
  }
  
  componentDidMount(){
    this.fetchVenues()
}
  
//changes the search term based on user input from nav bar
  changeQuery=(value)=>{
    this.setState({search:value}, this.fetchVenues)
  }
//fecth reuqest for Foursqare
   fetchVenues = ()=> {
    const parameters={
      query:this.state.search ? this.state.search: "topPicks",
      near:"Malmo,Sweden",
      limit:"30",
      v:"20190204"

    },
    client_id="K4Z0NZV2MFC43ORGTT5ZLIDUQO3DVNUCLHIB33QS5W0KO54K",
    client_secret="O0ZIQFPBW5GTWXJRUG2NFVHYR1HARB4RZCDEFRA0KXH55Y2V";
    
    let baseUrl='https://api.foursquare.com/v2/venues/';
    let url = baseUrl + `explore?client_id=${client_id}&client_secret=${client_secret}&v=${parameters.v}&near=${parameters.near}}&limit=${parameters.limit}&section=${parameters.query}`;
    
    fetch(url)
    .then(response=>response.json())
    .then(data=> {
      if(!this.state.myTopPicks){
        this.setState({
          myTopPicks:data.response.groups[0].items,
          venues:data.response.groups[0].items
        }); 
      }else{
        this.setState({venues:data.response.groups[0].items})
      }
      
    }).catch(function(error){
      alert( "Oh no, it seems a dingo eat your Foursquare markers! Check back later." );
    })
    }
  
  addMarkerToSate=(__tempMarkers__)=>{
    ///create a new array by filtering the individual temp markers against the individual state markers and retruning only the ones that dont repeat
    //I need this to remove the markers when a new category is chosen
    this.setState({markers:[...__tempMarkers__]}); 
    
  }
  
  clickOnListItem=(vId)=>{
    const markerEquivalent=this.state.markers.filter(marker=>vId===marker.id)[0];
    //makes the marker bounce
    markerEquivalent.setAnimation(window.google.maps.Animation.BOUNCE);
    //for three seconds
    window.setTimeout(function(){
      markerEquivalent.setAnimation(null);
    }, 5000);

  }

  render() {
    return (
      <div className="App">
        <header className="pageHeader"><h1>My Malmö</h1></header>
        {/*Special thanks to artnerdnet for her awesome hamburger menu https://github.com/artnerdnet*/}
        <HamMenu/>
        <main className="container">
           <Searchbar
           venues={this.state.venues}
           filteredVenues={this.filteredVenues}
           clickOnListItem={this.clickOnListItem}
           categories={this.state.categories}
           changeQuery={this.changeQuery}
           query={this.state.query}
           markers={this.state.markers}
          />  
          <Map
          fetchVenues={this.fetchVenues}
          venues={this.state.venues}
          filteredVenues={this.filteredVenues}
          addMarkerToState={this.addMarkerToSate}
          search={this.state.search}
          markers={this.state.markers}
          />
        </main>
        <footer className="footer">
           <div className="atributionImg, fsq"><img className="fourSq" src={fouricon} alt="Powered by FourSquare"/></div>
           <div className="atributionImg, glg"><img className="googleLogo" src={glg} alt="Powered by Google"/></div>
        </footer>
      </div>
    );
  }
}

export default App;
