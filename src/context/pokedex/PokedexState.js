import React, { useReducer } from "react";
import PokedexContext from "./PokedexContext";
import PokedexReducer from "./PokedexReducer";
import pokeapi from "../../config/axios";
import { 
        LIST_FETCH_REQUEST, 
        LIST_FETCH_SUCCESS, 
        DETAILS_FETCH_SUCCESS 
       } 
from '../../types';

const PokedexState = (props) => {
  const initialState = {
    isFetchingList: false,
    isFullyLoaded: false,
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
    fetchPokemons(state.next);
  }

  const fetchPrevious = () => {
    fetchPokemons(state.previous);
  }

  const fetchPokemons = (url) => {
    try {
        dispatch({
            type: LIST_FETCH_REQUEST,
        });

        pokeapi
        .get(url)
        .then((res) => {

            dispatch({
                type: LIST_FETCH_SUCCESS,
                payload: res.data,
            });

            return Promise.all(res.data.results.map((result) => {
                return pokeapi.get(result.url);
            })).then((res) => {
                const pokemons = res.map(resp => resp.data);

                dispatch({
                    type: DETAILS_FETCH_SUCCESS,
                    payload: pokemons,
                });
            })
        });
        

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PokedexContext.Provider
      value={{
        isLoading: state.pokemons.length===0,
        isFullyLoaded: state.isFullyLoaded,
        pokemons: state.pokemons,
        hasPrevious: state.previous !== null,
        hasNext: state.next !== null,
        fetchNext: fetchNext,
        fetchPrevious: fetchPrevious,
      }}
    >
      {props.children}
    </PokedexContext.Provider>
  );
};

export default PokedexState;
