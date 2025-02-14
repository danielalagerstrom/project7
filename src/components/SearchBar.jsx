import React from 'react';


function SearchBar () {

    return (
        <div className= "search-bar">
            <input type="text" placeholder='Search for a recipe' />
            <button className='btn secondary'>Search</button>
        </div>
    )
}

export default SearchBar;