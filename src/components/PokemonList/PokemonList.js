import React, { useContext, useEffect, Fragment } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.scss";
import { Spinner } from "react-bootstrap";

const PokemonList = () => {
  const pokedexContext = useContext(PokedexContext);
  const { pokemons, fetchNext } = pokedexContext;

  useEffect(() => {
    fetchNext();
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
