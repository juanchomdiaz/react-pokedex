import React, { Fragment, useContext, useEffect } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";

import { Button } from "react-bootstrap";

const PokemonDetails = ({ history, match }) => {
  const pokedexContext = useContext(PokedexContext);
  const { fetchPokemonDetails, goBackToPokedex } = pokedexContext;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchPokemonDetails(match.params.name);
  }, []);

  return (
    <Fragment>
      <h1>{match.params.name}</h1>
      <Button onClick={() => history.goBack()}>{t("go_back")}</Button>
    </Fragment>
  );
};

export default PokemonDetails;
