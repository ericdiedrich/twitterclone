import React from 'react';
import magnify from '../img/search.png'
import '../../src/App.css';


function Search() {
    return (
        <div className="search">
            <img className="magnifyImg" src={magnify} alt="magnifyglass" />
            <input className="searchInput" placeholder="Search Twitter" />
        </div>
    );
}

export default Search;                                                                                                                          