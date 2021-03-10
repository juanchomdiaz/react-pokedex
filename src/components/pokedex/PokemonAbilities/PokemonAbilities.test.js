import React from "react";
import PokemonAbilities from "./PokemonAbilities";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow, mount } from "enzyme";
import { Badge } from "react-bootstrap";
import i18n from 'i18n';
import { I18nextProvider } from "react-i18next";
import { act } from "react-dom/test-utils";

configure({ adapter: new Adapter() });

describe("PokemonAbilities", () => {
  it(">>> Should render the abilities", () => {
    let fakePokemon = {
      name: "bulbasaur",
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    };

    const wrapper = shallow(<PokemonAbilities pokemon={fakePokemon} />);
    expect(wrapper.find(Badge)).toHaveLength(2);
  });

  it(">>> Should translate the abilities", () => {
    let fakePokemon = {
      name: "bulbasaur",
      abilities: [
        {
          ability: {
            name: "overgrow",
            url: "https://pokeapi.co/api/v2/ability/65/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "chlorophyll",
            url: "https://pokeapi.co/api/v2/ability/34/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
    };

    i18n.addResourceBundle('en', 'translation', {overgrow: "Overgrow"});
    i18n.addResourceBundle('es', 'translation', {overgrow: "Espesura"});

    const wrapper = mount(<I18nextProvider i18n={i18n}><PokemonAbilities pokemon={fakePokemon} /></I18nextProvider>);

        act(() => {
        i18n.changeLanguage("en");
    });

    expect(wrapper.find(Badge).at(0).text()).toBe("Overgrow");

    act(() => {
        i18n.changeLanguage("es");
    });

    
    expect(wrapper.find(Badge).at(0).text()).toBe("Espesura");

  });
});
