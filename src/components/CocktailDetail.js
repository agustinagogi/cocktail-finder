import React from 'react'

function CocktailDetail({cocktail, onClose}) {
    const getIngredients = () => {
        const ingredients = [];

        // La API tiene hasta 15 ingredientes
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            const measure = cocktail[`strMeasure${i}`];

            if (ingredient) {
                ingredients.push(`${measure ||''} ${ingredient}`);
            } else {
                break;
            }
        }

        return ingredients;
    };

    const ingredientsList = getIngredients();

    return (
        <div className ="cocktail-detail">
            <button onClick={onClose} className="close-button">
                ← Volver a la búsqueda
            </button>

            <h2>{cocktail.strDrink}</h2>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>

            <div className="details-content">
                <h3>Ingredients</h3>
                <ul>
                    {ingredientsList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Instrucciones: </h3>
                <p>{cocktail.strInstructions}</p>
            </div>
        </div>
    )
}

export default CocktailDetail;