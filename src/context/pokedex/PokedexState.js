import React, { useReducer } from "react";
import PokedexContext from "./PokedexContext";
import PokedexReducer from "./PokedexReducer";
import pokeapi from "../../config/axios";
import {
  LOAD_POKEMONS_START,
  LOAD_POKEMONS_READY,
  LOAD_POKEMONS_ERROR,
  LOAD_POKEMONS_DETAILS_START,
  LOAD_POKEMONS_DETAILS_READY,
  LOAD_POKEMONS_DETAILS_ERROR,
  LOAD_POKEMON_DETAILS_START,
  LOAD_POKEMON_DETAILS_READY,
  LOAD_POKEMON_DETAILS_ERROR,
} from "../../types";

const PokedexState = (props) => {
  const initialState = {
    withError: false,
    error: null,
    isReady: false,
    showingPokemonDetails: false,
    showingPokemonList: true,
    count: 0,
    next: "/pokemon?limit=5",
    previous: null,
    pokemons: [],
    limit: 5,
    currentPokemon: {},
  };

  const [state, dispatch] = useReducer(PokedexReducer, initialState);

  //functions
  const fetchNext = () => {
    if (state.showingPokemonList) fetchPokemons(state.next);
  };

  const fetchPrevious = () => {
    fetchPokemons(state.previous);
  };

  const fetchPokemons = (url) => {
    dispatch({
      type: LOAD_POKEMONS_START,
    });

    pokeapi
      .get(url)
      .then((res) => {
        dispatch({
          type: LOAD_POKEMONS_READY,
          payload: res.data,
        });

        dispatch({
          type: LOAD_POKEMONS_DETAILS_START,
        });

        return Promise.all(
          res.data.results.map((result) => {
            return pokeapi.get(result.url);
          })
        )
          .then((res) => {
            const pokemons = res.map((resp) => resp.data);

            dispatch({
              type: LOAD_POKEMONS_DETAILS_READY,
              payload: pokemons,
            });
          })
          .catch((error) => {
            dispatch({
              type: LOAD_POKEMONS_DETAILS_ERROR,
              payload: error,
            });
          });
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: LOAD_POKEMONS_ERROR,
          payload: error,
        });
      });
  };

  const fetchPokemonDetails = (name) => {
    dispatch({
      type: LOAD_POKEMON_DETAILS_START,
    });

    const pokemon = state.pokemons.filter((pok) => pok.name === name);

    dispatch({
      type: LOAD_POKEMON_DETAILS_READY,
      payload: pokemon,
    });
  };

  return (
    <PokedexContext.Provider
      value={{
        withError: state.withError,
        isReady: state.isReady,
        pokemons: state.pokemons,
        hasPrevious: state.previous !== null,
        hasNext: state.next !== null,
        fetchNext: fetchNext,
        fetchPrevious: fetchPrevious,
        fetchPokemonDetails: fetchPokemonDetails,
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexState;
