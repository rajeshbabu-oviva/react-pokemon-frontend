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
      <p>Hi, Rajesh is this working</p>
      <PokemonList />
    </div>
  );
};

export default App;
