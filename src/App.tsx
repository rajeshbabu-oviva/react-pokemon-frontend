/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './App.css';
import { IPokemonSearchParams } from './interfaces/Pokemon';
import PokemonList from './components/PokemonList';

const App: React.FC<{}> = (): JSX.Element => {
  const initialState = {
    offset: 0,
    limit: 10,
  };
  const [state, setState] = useState<IPokemonSearchParams>(initialState);
  const [limit, setLimit] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [type, setType] = useState<string>('');
  const [numberOfEvolutions, setNumberOfEvolutions] = useState<string>();

  return (
    <div className="App">
      <h1>Poke-World</h1>
      <div>
        Offset:
        <input type="number" onChange={(event) => setOffset(Number(event.target.value))} />
        Limit:
        <input type="number" onChange={(event) => setLimit(Number(event.target.value))} />
        Type:
        <input type="text" onChange={(event) => setType(event.target.value)} />
        Number of Evolutions:
        <input type="text" onChange={(event) => setNumberOfEvolutions(event.target.value)} />
        <button
          onClick={() =>
            setState((prevState) => ({ ...prevState, limit, offset, type, numberOfEvolutions }))
          }
        >
          Get Pokemon
        </button>
      </div>
      <PokemonList
        limit={state.limit}
        offset={state.offset}
        type={state.type}
        numberOfEvolutions={state.numberOfEvolutions}
      />
    </div>
  );
};

export default App;
