import React, { Component } from 'react';

import '../App.css';



class SearchBar extends Component {
   
    
   
      

  render() {
    return (
    <div className="search-bar">
        <div className="search-list-bar">
            <div className="search-input-wrapper">
            <input 
            type="text" 
            placeholder="Filter venues"
            /* value={query}
            onChange= {searchBooks} */
            />
        </div>
    </div>
    <div className="search-books-results">
        <ul>
            <li>Hi</li>
            <li>im</li>
            <li>a</li>
            <li>list</li>
        </ul>
    </div>
    </div>
      

    );
  }
}


export default SearchBar;