import React, { Component } from 'react';
import './Searchbar.css';



class SearchBar extends Component {
   
    state={
        isDataReady:false,
        query:""
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if(code === 13) { 
            document.getElementById("openSidebarMenu").click();
        } 
    }
   
    componentDidUpdate(prevProps){
        if(prevProps.venues!==this.props.venues){
            this.setState({isDataReady:true})
        }

        
    }

    changeCat=(val)=>{
        this.props.changeQuery(val)
        this.setState({query:val})
    }

    

  render() {
      const {isDataReady,query}=this.state;
      const {clickOnListItem}=this.props;

      
     
    return (
    
    <div className="side-bar">
        <div className="search-input-wrapper">
            <select className="searchCont" value={query} 
            onChange={(e)=>this.changeCat(e.target.value)}>
                <option value={query} disabled>{query ? query : "Top Picks"}</option>
                {this.props.categories.map(cat=>{
                    return <option key={cat.value} value={cat.value}>{cat.value}</option>

                })}
              
                </select>
        </div>
        <div className="search-results">
            <ul className="listCont">
            {isDataReady && (
                this.props.venues.map(venue=>(
                <li className="listItem" key={venue.venue.id} onClick={()=>clickOnListItem(venue.venue.id)}>
                    <div className="locationCont">
                        <p className="lName">{venue.venue.name}</p>
                        <p className="lCat">{venue.venue.categories[0].name ? venue.venue.categories[0].name : "No Category Available"}</p> 
                        <p className="lAdd">{`Adress: ${venue.venue.location.address}, ${venue.venue.location.city}`}</p>
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