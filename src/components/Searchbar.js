import React, { Component } from 'react';
import './Searchbar.css';



class SearchBar extends Component {
   
    state={
        isDataReady:false,
        query:""
    }

   //checks for updates on venues fetched and sets the conditional used by the render method
    componentDidUpdate(prevProps){
        if(prevProps.venues!==this.props.venues){
            this.setState({isDataReady:true})
        }      
    }
//used to pass the search parameter to the state at App.js
    changeCat=(val)=>{
        this.props.changeQuery(val.value)
        this.setState({query:val.text})
    }

    

  render() {
      const {isDataReady,query}=this.state;
      const {clickOnListItem}=this.props;

          
    return (
    <div className="side-bar">
        <select className="searchCont"  /* value={query} */  onChange={(e)=>this.changeCat(e.target)} >
            <option value={query} >{query ? query : "Top Picks"}</option>
            
             {this.props.categories.map(cat=>{
                return <option key={cat.value} value={cat.value}>{cat.text}</option>

            })} 

        </select>
        <div className="search-results">
            <ul className="listCont">
            {isDataReady && (
                this.props.venues.map(venue=>(
                <li className="listItem" key={venue.venue.id} onClick={(e)=>clickOnListItem(venue)}>
                    <div className="locationCont">
                        <p className="lName">{venue.venue.name}</p>
                        <p className="lCat">{venue.venue.categories[0].name ? venue.venue.categories[0].name : "No Category Available"}</p> 
                        <p className="lAdd">{`Address: ${venue.venue.location.address}, ${venue.venue.location.city}`}</p>
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