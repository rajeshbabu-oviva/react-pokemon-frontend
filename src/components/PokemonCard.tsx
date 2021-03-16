/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

interface IPokemonCardOwnProps {
  name: string;
  types: Array<string>;
  id: number;
  numberOfEvolutions: number;
  imageUrl: string;
}

const TypeWrapper = styled.div`
  margin: 10px 0;
  font-size: 16px;
  text-align: left;
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const Label = styled.div`
  text-transform: capitalize;
  margin-right: 10px;
`;

const Type = styled.div`
  margin-right: 10px;
  text-transform: capitalize;
  border: solid 1px #ccc;
  padding: 3px 5px;
  border-radius: 4px;
`;

const PokemonCardContainer = styled.div`
  font-size: 1.5em;
  border-radius: 4px;
  border: 1px solid lightgray;
  margin: 1em;
  padding: 1em;
`;

const PokemonCardTitle = styled.h3`
  text-transform: capitalize;
  text-align: center;
`;

const PokemonTypes = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

const PokemonImage = styled.img`
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const PokemonList: React.FC<IPokemonCardOwnProps> = ({
  name,
  types,
  id,
  numberOfEvolutions,
  imageUrl,
}): JSX.Element => {
  return (
    <PokemonCardContainer key={id}>
      <div>
        <PokemonCardTitle>{name}</PokemonCardTitle>
        <PokemonTypes>
          <PokemonImage src={imageUrl} alt="Pokemon image" />
          <TypeWrapper>
            <Label>Type:</Label>
            {types.map((type, index) => {
              // eslint-disable-next-line react/no-array-index-key
              return <Type key={index}>{type}</Type>;
            })}
          </TypeWrapper>
          <Label>Number of evolutions: {numberOfEvolutions} </Label>
        </PokemonTypes>
      </div>
    </PokemonCardContainer>
  );
};

export default PokemonList;
