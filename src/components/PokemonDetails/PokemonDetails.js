import React, { Fragment, useContext, useEffect } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";

import { Button } from "react-bootstrap";

const PokemonDetails = ({ history, match }) => {
  const pokedexContext = useContext(PokedexContext);
  const { fetchPokemonDetails, goBackToPokedex } = pokedexContext;
  const { t } = useTranslation();

  useEffect(() => {
    fetchPokemonDetails(match.params.name);
  }, []);

  const goBack = () => {
    goBackToPokedex(history);
  }

  return (
    <Fragment>
      <h1>{match.params.name}</h1>
      <Button onClick={() => goBack()}>{t("go_back")}</Button>
    </Fragment>
  );
};

export default PokemonDetails;
