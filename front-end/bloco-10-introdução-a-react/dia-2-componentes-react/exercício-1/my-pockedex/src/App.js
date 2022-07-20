import './App.css';
import React from 'react';
import data from './data';
import Pokedex from './Components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <section>
        <Pokedex pokemons={ data }/>;
      </section>
    )
  }

}

export default App;
