import React from "react";
import PokemonCard from "./PokemonCard";
import PokedexContext from "contexts/pokedex/PokedexContext";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";


function renderPokemonCard(value, pokemonVal) {
  return mount(
    <Router>
      <PokedexContext.Provider value={{ isReady: value }}>
        <PokemonCard pokemon={pokemonVal} />
      </PokedexContext.Provider>
    </Router>
  );
}

describe("PokemonCard", () => {
    it(">>> Should render the card with the image", () => {
        const fakePokemon = {
          name: "bulbasaur",
          sprites: {
            other: {
              dream_world: {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              },
            },
          },
        };
      
        const wrapper = renderPokemonCard(true, fakePokemon);
        setTimeout(() => {
          expect(wrapper.find(".card-img").exists()).toBeTruthy();
        }, 3000)
      });

      it(">>> Should render the card skeleton", () => {
        const fakePokemon = {
          name: "bulbasaur",
          sprites: {
            other: {
              dream_world: {
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
              },
            },
          },
        };
      
        const wrapper = renderPokemonCard(true, fakePokemon);
        setTimeout(() => {
          expect(wrapper.find(".react-loading-skeleton").exists()).toBeTruthy();
        }, 2000)
      });
});


