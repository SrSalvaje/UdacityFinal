import React, { Component } from 'react';

import '../App.css';



class SearchBar extends Component {
   
    state={
        isDataReady:false
    }
   
    componentDidUpdate(prevProps){
        if(prevProps.venues!==this.props.venues){
            this.setState({isDataReady:true})
        }
    }

    

  render() {
      const {isDataReady}=this.state;
      const {clickOnListItem}=this.props;
      
     
    return (
    <div className="side-bar">
        <div className="search-input-wrapper">
            <input 
            type="text" 
            placeholder="Filter venues"
            /* value={query}
            onChange= {searchBooks} */
            />
        </div>
        <div className="search-results">
            <ul className="listCont">
            {isDataReady && (
                this.props.venues.map(venue=>(
                <li key={venue.venue.id} onClick={()=>clickOnListItem(venue.venue.id)}>
                    <div className="locationCont">
                        <h3>{venue.venue.name}</h3>
                        <p>{venue.venue.categories[0].name ? venue.venue.categories[0].name : "No Category Available"}</p> 
                        <p>{`Adress: ${venue.venue.location.address}, ${venue.venue.location.city}`}</p>
                    </div>      
                </li>
                ))
            )
            }
            </ul>
        </div>
    </div>
      

    );
  }
}


export default SearchBar;