import React from "react";
import PokemonImage from "./PokemonImage";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });


describe("PokemonImage", () => {
    it(">>> Should render the image", () => {
        let fakePokemon = {
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
      
        const wrapper = shallow(<PokemonImage pokemon={fakePokemon} />);
        expect(wrapper.find(".pokemon-img").exists()).toBeTruthy();
      });

});
