// Es el cerebro de la aplicación, controla el estado (qué está buscando, cuáles son los resultados) y se lo pasará a otros componentes
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import CocktailList from './components/CocktailList';
import logo from './logo.svg';
import './App.css';

function App() {

  // Estado para guardar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para guardar los cócteles encontrados (será un array vacío por ahora)
  const [cocktails, setCocktails] = useState([]);

  // Aquí haremos la lógica para llamar a la API más adelante
  return (
    <div className="App">
      <header className="App-header">
        <h1>CocktailFinder</h1>
      </header>
      <main>
        {/* Pasamos el estado y la función para actualizarlo al SearchBar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

        {/*Pasamos la lista de cócteles al componente Cocktaillist */}
        <CocktailList cocktails={cocktails}/>
      </main>
    </div>
  );
}

export default App;
