import React, { useReducer } from 'react';
import PokedexContext from './PokedexContext';
import PokedexReducer from './PokedexReducer';
import { FETCH_POKEMONS } from '../../types';
import pokeapi from '../../config/axios';

const PokedexState = props => {
    const initialState = {
        count: 0,
        next: '',
        previous: '',
        pokemons: [],
        limit: 5,
        offset: 0,
        currentPokemon: {}
    }

    const [state, dispatch] = useReducer(PokedexReducer, initialState);

    //functions
    const fetchPokemons = async () => {
        try {
            const results = await pokeapi.get(`/pokemon?offset=${state.offset}&limit=${state.limit}`)

            dispatch({
                type: FETCH_POKEMONS,
                payload: results.data
            })
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <PokedexContext.Provider
            value={{
                pokemons: state.pokemons,
                fetchPokemons: fetchPokemons
            }}
        >
            {props.children}
        </PokedexContext.Provider>
    )
}

export default PokedexState;
