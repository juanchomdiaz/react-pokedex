import React, { useContext, useEffect, Fragment } from 'react';
import PokedexContext from '../../context/pokedex/PokedexContext';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList = () => {

    const pokedexContext = useContext(PokedexContext);
    const {pokemons, fetchPokemons} = pokedexContext;

    useEffect(() => {
        fetchPokemons();
    },[]);

    return ( 
        <Fragment>
            {pokemons.map(pokemon => (
                <PokemonCard
                    pokemon={pokemon}
                />
            ))}
        </Fragment>
    );
}
 
export default PokemonList;