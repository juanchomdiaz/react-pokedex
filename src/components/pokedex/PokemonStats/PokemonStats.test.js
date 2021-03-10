import React from "react";
import PokemonStats from "./PokemonStats";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";

configure({ adapter: new Adapter() });


describe("PokemonAbilities", () => {
    it(">>> Should render the stats", () => {
        let fakePokemon = {
          name: "bulbasaur",
          parsedStats: [{name: "hp", value: 45}, {name: "attack", value: 49},{name: "defense", value: 49},{name: "speed", value: 45}]
        };
      
        const wrapper = shallow(<PokemonStats pokemon={fakePokemon} />);
        expect(wrapper.find(".stat-item").exists()).toBeTruthy();
      });

});