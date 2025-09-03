import React from 'react';

// Recibimos la información de un solo cóctel

function CocktailCard({cocktail, onSelectCocktail}){
    return (
        <div className="cocktail-card"
        onClick={() => onSelectCocktail(cocktail)}>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
            <h3>{cocktail.strDrink}</h3>
        </div>
    );
}

export default CocktailCard;