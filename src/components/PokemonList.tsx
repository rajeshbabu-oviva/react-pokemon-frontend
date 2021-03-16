import React from 'react';
import useGetPokeMonService from '../hooks/useGetPokemonService';
import { IUrlQueryParams } from '../interfaces/Pokemon';

interface IPokemonListOwnProps {
  limit?: number;
  offset?: number;
}

const BASE_URL = 'http://localhost:7889/pokemon?';

function makePokemonUrl(urlQueryParams: IUrlQueryParams): string {
  const { limit, offset, type, noOfEvolutions } = urlQueryParams;
  let pokemonUrl = `${BASE_URL}limit=${limit}&offset=${offset}`;

  if (type) {
    pokemonUrl = `${pokemonUrl}&type=${type}`;
  }

  if (noOfEvolutions || noOfEvolutions === 0) {
    pokemonUrl = `${pokemonUrl}&noOfEvolutions=${noOfEvolutions}`;
  }

  return pokemonUrl;
}

const PokemonList: React.FC<IPokemonListOwnProps> = (): JSX.Element => {
  const urlQueryParams: IUrlQueryParams = {
    limit: 10,
    offset: 0,
  };
  const pokemonUrl = makePokemonUrl(urlQueryParams);
  const service = useGetPokeMonService(pokemonUrl);

  return (
    <div>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload &&
        service.payload.detailedResults &&
        service.payload.detailedResults.map((pokemon) => (
          <div>
            <img src={pokemon.imageUrl} alt="pokemon information" />
            <div key={pokemon.id}>{pokemon.name}</div>
          </div>
        ))}
      {service.status === 'error' && <div> Error occured: {service.error.message}</div>}
    </div>
  );
};

export default PokemonList;
