import React, { Component } from 'react';
import "./Map.css"


class Map extends Component {
   
    state={
        isMapRendered:false,
        map:null,
        
    }
    
    

    componentDidUpdate(prevProps){
        if(prevProps.venues!==this.props.venues && this.state.map===null){
            this.renderMap()  
        }
        if(prevProps.venues!==this.props.venues && this.state.map){
            this.props.markers.map(marker=>marker.setMap(null))
            
            this.renderMarkers()
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

            if(!map){
                this.onMapError();   
                console.log(map);
            }else{
                this.setState({isMapRendered:true, 
                            map:map}, this.renderMarkers);
                }
    }
        
        //
    renderMarkers=()=>{
        const {map}=this.state
        const infowindow = new window.google.maps.InfoWindow();
        const __tempMarkers__=[];
        //remove markers if  already showing
        

        this.props.venues.forEach(venue=>{
            let infoWindowcontent = `<div class='infoWindow'>
        <p class="vName">${venue.venue.name}</p>
        <p class="vCat">${venue.venue.categories[0].name}</p>
        <p class="vAdd">Address: ${venue.venue.location.formattedAddress}</p>
        </div>`;
        
                //for each venue create a marker
            let marker = new window.google.maps.Marker({
                map: map,
                animation:window.google.maps.Animation.DROP,
                position: {lat: venue.venue.location.lat, lng: venue.venue.location.lng},
       
                //sets same Id for the marker as the one for venue
                "id":venue.venue.id, 
                //sets same catehory for the marker as the one for venue
                "category":this.props.search===""? "topPicks" : this.props.search,
                "venue":venue.venue.name
                //title: venue.venue.name
                });
                __tempMarkers__.push(marker);
                //add marker to array
                //__tempMarkers__.push(marker);
                marker.addListener("click", function () {
                    infowindow.setContent(infoWindowcontent)
                    infowindow.open(map, marker)  
                    
                });

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
                
            }) 
            //adds the markers to the state in App.js
            this.props.addMarkerToState(__tempMarkers__);
            
    }
        
         //

      

  render() {
    return (
    <div className="mapContainer">
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
    index.parentNode.insertBefore(script, index);
    //error function taken based on https://developers.google.com/maps/documentation/javascript/events
    window.gm_authFailure=(err)=>{
        const mapWarning = document.querySelector('#map');
        mapWarning.innerHTML = `<div class='warning-dialog'>
        <h2 class='warning-title'>Oh The Humanity!!!</h2>
        <p class='warning-message'>Google Maps is burning! Please check the console or come back later.<p>
        <p class='warning-message'>If this is a Google Maps error you can still use the navigation bar to find the coolest places in town.</p></div>`;
    }
}


export default Map;