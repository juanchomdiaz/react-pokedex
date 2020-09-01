import React, { useContext, useEffect } from 'react';
import PokedexContext from '../../context/pokedex/PokedexContext';
import PokemonCard from '../PokemonCard/PokemonCard';
import "./PokemonList.scss";

const PokemonList = () => {

    const pokedexContext = useContext(PokedexContext);
    const {pokemons, fetchPokemons} = pokedexContext;

    useEffect(() => {
        fetchPokemons();
    },[]);

    return ( 
        <div className="card-grid">
            {pokemons.map(pokemon => (
                <PokemonCard
                    pokemon={pokemon}
                />
            ))}
        </div>
    );
}
 
export default PokemonList;