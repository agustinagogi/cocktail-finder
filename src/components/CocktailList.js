import React from 'react';
import CocktailCard from './CocktailCard';

function CocktailList({cocktails, onSelectCocktail}){
    // Si no hay cócteles, mostramos un mensaje

    if (cocktails.length === 0){
        return <p className="no-results">We couldn't find any cocktails. Please search another one!</p>
    }

    return (
        <div className="cocktail-list">
            {/* Usamos .map() para crear un componente CocktailCard por cada cóctel */}
            {cocktails.map(cocktail => (
                <CocktailCard 
                key={cocktail.idDrink} 
                cocktail={cocktail}
                onSelectCocktail={onSelectCocktail}/>
            ))}
        </div>
    );
}

export default CocktailList;