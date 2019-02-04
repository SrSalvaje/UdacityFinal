import React, { Component } from 'react';
import '../App.css';


class Map extends Component {
    
    componentDidMount(){
        this.renderMap()
    }

    renderMap =()=>{
        const APiKey="AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"
        loadMapScript(`https://maps.googleapis.com/maps/api/js?key=${APiKey}&callback=initMap`);
        window.initMap=this.initMap;
    }
    //Google´s example
    initMap=()=> {
       
      /*   const map = */ new window.google.maps.Map(document.getElementById("map"), {
            center:{lat: 55.609126, lng: 13.000811},
            zoom:14
        })
         
      }

  render() {
    return (
    <div class="mapContainer">
        <div id="map"></div>
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