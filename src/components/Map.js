import React, { Component } from 'react';
//import Marker from "./Markers"
import '../App.css';


class Map extends Component {
    
    componentDidMount(){
        this.renderMap();
    }

    
    renderMap =()=>{
        const APiKey="AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"
        loadMapScript(`https://maps.googleapis.com/maps/api/js?key=${APiKey}&callback=initMap`);
        window.initMap=this.initMap;
    }
    //Google´s example
    initMap=()=> {
       
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center:{lat: 55.609126, lng: 13.000811},
            zoom:14
        });
        //adapted from https://developers.google.com/maps/documentation/javascript/markers 
        let marker = new window.google.maps.Marker({
            position: {lat: 55.609126, lng: 13.000811},
            map: map,
            title: 'Central Station'
          });
         this.props.venues.map(venue=>{
            let marker = new window.google.maps.Marker({
                position: {lat: venue.venue.location.lat, lng: venue.venue.location.lng},
                map: map
                //title: 'Central Station'
              });

         })
      }

  render() {
    return (
    <div class="mapContainer">
        <div id="map">
        {/* here is where i should write my loops for rndering all markers */}
        
        </div>
    </div>
      
      

    );
  }
}
/*This function is based on the awesome tutorial by Elharony
https://www.elharony.com
https://www.youtube.com/watch?v=W5LhLZqj76s 
I learned more in his 15 min video than on all the tutorials por 
react scriptloaders or react google map packages
*/

function loadMapScript(url){
    const index = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src=url;
    script.async=true;
    script.defer=true;
    index.parentNode.insertBefore(script, index)
}
export default Map;