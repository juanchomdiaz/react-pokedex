import React, { Fragment, useContext, useEffect } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";

import { Button } from "react-bootstrap";

const PokemonDetails = ({ history, match }) => {
  const pokedexContext = useContext(PokedexContext);
  const { fetchPokemonDetails } = pokedexContext;

  useEffect(() => {
    fetchPokemonDetails(match.params.name);
  }, []);

  const goBack = () => {
    history.goBack();
  }

  return (
    <Fragment>
      <h1>{match.params.name}</h1>
      <Button onClick={() => goBack()}>Go back</Button>
    </Fragment>
  );
};

export default PokemonDetails;
