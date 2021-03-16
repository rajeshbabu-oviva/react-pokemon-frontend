import React, { useState, ChangeEvent } from 'react';
import './App.css';
import PokemonList from './components/PokemonList';

interface IAppOwnProps {
  limit?: number;
  offset?: number;
}

const App: React.FC<IAppOwnProps> = (): JSX.Element => {
  return (
    <div className="App">
      <h1>Poke-World</h1>
      <PokemonList />
    </div>
  );
};

export default App;
