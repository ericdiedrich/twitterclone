import React from 'react';
import magnify from '../img/search.png'


function Search() {
    return (
        <div className="search">
            <div className="magnify-holder" >
                <img src={magnify} alt="magnifyglass" />
            </div>
            <div className="search-holder">
                <input placeholder="Search Twitter" />
            </div>
        </div>
    );
}

export default Search;