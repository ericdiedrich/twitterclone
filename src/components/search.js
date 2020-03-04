import React from 'react';
import magnify from '../img/search.png'


function Search() {
    return (
        <div className="search">
            <div className="magnify-holder" >
                <img className="magnifyImg" src={magnify} alt="magnifyglass" />
            </div>
            <div className="search-holder">
                <input className="searchInput" placeholder="Search Twitter" />
            </div>
        </div>
    );
}

export default Search;