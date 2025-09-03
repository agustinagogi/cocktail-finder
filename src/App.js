// Es el cerebro de la aplicación, controla el estado (qué está buscando, cuáles son los resultados) y se lo pasará a otros componentes
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CocktailList from "./components/CocktailList";
import CocktailDetail from "./components/CocktailDetail";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // Estado para guardar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para guardar los cócteles encontrados (será un array vacío por ahora)
  const [cocktails, setCocktails] = useState([]);

  const [selectedCocktail, setSelectedCocktail] = useState(null);

  // Hook que se ejecutará cuando cambien sus dependencias
  useEffect(() => {
    // Definimos una función asíncrona para usar await
    const fetchCocktails = async () => {
      // Solo buscamos si hay algo escrito para no llamar a la API si no se necesita
      if (searchTerm.trim() === "") {
        setCocktails([]); // Si está vacío, limpiamos los resultados
        return;
      }

      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );

        const data = await response.json();
        // La API devuelve { drinks: [...]} o {drinks: null} si no encuentra nada
        setCocktails(data.drinks || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setCocktails([]); // En caso de error, vaciamos los resultados
      }
    };
    fetchCocktails();
  }, [searchTerm]);

  const handleSelectCocktail = (cocktail) => {
    setSelectedCocktail(cocktail);
  };

  // Aquí haremos la lógica para llamar a la API más adelante
  return (
    <div className="App">
      <header className="App-header">
        <h1>CocktailFinder</h1>
      </header>
      <main>
        {selectedCocktail ? (
          <CocktailDetail
            cocktail={selectedCocktail}
            onClose={() => setSelectedCocktail(null)}
          />
        ) : (
          <>
            {/* Pasamos el estado y la función como props para actualizarlo al SearchBar 
        Le damos el nombre searchTerm a la prop y le pasamos el valor*/}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/*Pasamos la lista de cócteles al componente Cocktaillist */}
            <CocktailList
              cocktails={cocktails}
              onSelectCocktail={handleSelectCocktail}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
