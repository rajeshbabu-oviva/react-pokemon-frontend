import { useEffect, useState } from 'react';
import { IPokemonResponse } from '../interfaces/Pokemon';
import { ILoading } from '../interfaces/Loading';

const useGetPokemonService = (pokemonUrl: string): ILoading<IPokemonResponse> => {
  const [result, setResult] = useState<ILoading<IPokemonResponse>>({
    status: 'loading',
  });

  useEffect(() => {
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then((response) => setResult({ status: 'loaded', payload: response }))
      .catch((error) => setResult({ status: 'error', error }));
  }, [pokemonUrl]);

  return result;
};

export default useGetPokemonService;
