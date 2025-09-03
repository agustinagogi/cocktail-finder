import React from 'react';

// Recibimos las props que le pasamos desde App.js

function SearchBar({searchTerm, setSearchTerm}){

    // Función que se ejecuta cada vez que el usuario escribe algo
    const handleInputChange = (event) => {
        // Cogemos el valor y lo ponemos
        setSearchTerm(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
            type="text"
            placeholder="Search your favorite cocktail..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
            />
        </div>
    );
        
}

export default SearchBar;