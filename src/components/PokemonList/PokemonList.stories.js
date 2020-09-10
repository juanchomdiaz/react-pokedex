import React from 'react';
import PokemonList  from './PokemonList';
import { Container } from 'react-bootstrap';
import PokedexContext from "../../context/pokedex/PokedexContext";
import {BrowserRouter as Router} from 'react-router-dom';
export default {
  title: 'Podekex/PokemonList',
  component: PokemonList,
};

const fakePokemon = {
    name: "bulbasaur",
    id: 35,
    sprites: {
      other: {
        dream_world: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        },
      },
    },
};

const fakePokemons = [fakePokemon, fakePokemon, fakePokemon, fakePokemon, fakePokemon];
const fetchNextMock = () => {
    return fakePokemons;
}

const Template = (args) => <PokedexContext.Provider value={{pokemons: fakePokemons, fetchNext: fetchNextMock, isReady: true}}><Router><Container fluid><PokemonList {...args} /></Container></Router></PokedexContext.Provider>;

export const PokemonListReady = Template.bind({});

