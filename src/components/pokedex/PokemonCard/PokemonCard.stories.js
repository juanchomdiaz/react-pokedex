import React from 'react';
import PokemonCard  from './PokemonCard';
import { Container } from 'react-bootstrap';
import PokedexContext from "../../../contexts/pokedex/PokedexContext";
import { BrowserRouter as Router} from 'react-router-dom';

// This default export determines where you story goes in the story list
export default {
  title: 'Podekex/PokemonCard',
  component: PokemonCard,
};

const Template = (args) => <PokedexContext.Provider value={{ isReady: true }}><Router><Container fluid><PokemonCard {...args} /></Container></Router></PokedexContext.Provider>;

export const PokemonCardReady = Template.bind({});

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


PokemonCardReady.args = {
  pokemon: fakePokemon
};