/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import useGetPokeMonService from '../hooks/useGetPokemonService';
import { IUrlQueryParams, IPokemonSearchParams } from '../interfaces/Pokemon';
import PokemonCard from './PokemonCard';

const BASE_URL = 'http://localhost:7889/pokemon?';

function makePokemonUrl(urlQueryParams: IUrlQueryParams): string {
  const { limit, offset, type, noOfEvolutions } = urlQueryParams;
  let pokemonUrl = `${BASE_URL}limit=${limit}&offset=${offset}`;

  if (type) {
    pokemonUrl = `${pokemonUrl}&type=${type}`;
  }

  if (noOfEvolutions || noOfEvolutions === '0') {
    pokemonUrl = `${pokemonUrl}&noOfEvolutions=${noOfEvolutions}`;
  }

  return pokemonUrl;
}

const PokemonListContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const PokemonList: React.FC<IPokemonSearchParams> = ({
  limit,
  offset,
  type,
  numberOfEvolutions: noOfEvolutions,
}): JSX.Element => {
  const urlQueryParams: IUrlQueryParams = {
    limit,
    offset,
    type,
    noOfEvolutions,
  };

  const pokemonUrl = makePokemonUrl(urlQueryParams);
  const service = useGetPokeMonService(pokemonUrl);

  return (
    <PokemonListContainer>
      {service.status === 'loading' && <div>Loading...</div>}
      {service.status === 'loaded' &&
        service.payload.detailedResults.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            types={pokemon.types}
            numberOfEvolutions={pokemon.numberOfEvolutions}
            id={pokemon.id}
            imageUrl={pokemon.imageUrl}
          />
        ))}
      {service.status === 'error' && <div> Error occured: {service.error.message}</div>}
    </PokemonListContainer>
  );
};

export default PokemonList;
