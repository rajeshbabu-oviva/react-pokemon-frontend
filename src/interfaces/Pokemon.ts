export interface IPokemonResponse {
  next: string | null;
  previous: string | null;
  detailedResults: Array<IDetailedResult>;
}

export interface IDetailedResult {
  name: string;
  id: number;
  types: Array<string>;
  imageUrl: string;
  evolutionSequence: Array<string>;
  numberOfEvolutions: number;
}

export interface IUrlQueryParams {
  limit: number;
  offset: number;
  type?: string;
  noOfEvolutions?: string | undefined;
}

export interface IPokemonSearchParams {
  limit: number;
  offset: number;
  type?: string;
  numberOfEvolutions?: string | undefined;
}
