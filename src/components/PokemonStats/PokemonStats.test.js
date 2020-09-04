import React from "react";
import PokemonStats from "./PokemonStats";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });


describe("PokemonAbilities", () => {
    it(">>> Should render the stats", () => {
        let fakePokemon = {
          name: "bulbasaur",
          parsedStats: {"hp":45,"attack":49,"defense":49,"special-attack":65,"special-defense":65,"speed":45}
        };
      
        const wrapper = shallow(<PokemonStats pokemon={fakePokemon} />);
        expect(wrapper.find(".stat-item").exists()).toBeTruthy();
      });

});