import React, { useContext, useEffect, Fragment } from "react";

import PokedexContext from "contexts/pokedex/PokedexContext";

import PokemonCard from "components/pokedex/PokemonCard/PokemonCard";

import { Spinner } from "react-bootstrap";
import "./PokemonList.scss";

const PokemonList = () => {
  const pokedexContext = useContext(PokedexContext);
  const { pokemons, fetchNext } = pokedexContext;

  useEffect(() => {
    fetchNext();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {pokemons.lenght!==0 ? (
        <div className="card-grid">
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" />
        </div>
      )}
    </Fragment>
  );
};

export default PokemonList;
