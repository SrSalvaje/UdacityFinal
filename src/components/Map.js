import React, { Component } from 'react';
//import Marker from "./Markers"
import '../App.css';
//import Marker from './Markers';


class Map extends Component {
   
    
    
    

    componentDidUpdate(prevProps){
        if(prevProps.venues!==this.props.venues){
            this.renderMap()
        }

    }
    
    
    renderMap =()=>{
        const APiKey="AIzaSyAn6EMjdX_667KspKuVZRvYDNEZHNQXKS4"
        loadMapScript(`https://maps.googleapis.com/maps/api/js?key=${APiKey}&callback=initMap`);
        window.initMap=this.initMap;
    }
    //Google´s example
    initMap=()=> {
        //adapted from https://developers.google.com/maps/documentation/javascript/markers 

        const map = new window.google.maps.Map(document.getElementById("map"), {
            center:{lat: 55.609126, lng: 13.000811},
            zoom:14
        });
        
       
        
        

          let infowindow = new window.google.maps.InfoWindow();


        this.props.venues.map(venue=>{
            let i=300;
            
            
            window.setTimeout(function(){
                let marker = new window.google.maps.Marker({
                map: map,
                animation:window.google.maps.Animation.DROP,
                position: {lat: venue.venue.location.lat, lng: venue.venue.location.lng},
                "id":venue.venue.id
                //title: venue.venue.name
              });
              //adds the marker to the state in App.js
              //(()=>this.props.addMarkerToState(marker))(marker)

              marker.addListener("click", function () {
                  infowindow.setContent(venue.venue.name)
                  infowindow.open(map, marker)  
                  
              });

              //I can probably make this two functions cancel eachothers to save resources
              marker.addListener("mouseover", function() {
                if (marker.getAnimation() !== null) {
                    marker.setAnimation(null);
                    } else {
                    marker.setAnimation(window.google.maps.Animation.BOUNCE);
                    }
                    window.setTimeout(function(){
                        marker.setAnimation(null);
                      }, 1000);
                      
              })


            }, i=i+300)
            
              //for each venue create a marker
            
             
              

         }) 
      }

      

  render() {
    return (
    <div class="mapContainer">
        <div id="map">     
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