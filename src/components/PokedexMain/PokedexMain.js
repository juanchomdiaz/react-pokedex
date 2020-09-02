import React, { Fragment, useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import PokemonList from "../PokemonList";
import PokemonListPager from "../PokemonListPager";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";

const PokedexMain = () => {
  const pokedexContext = useContext(PokedexContext);
  const { withError } = pokedexContext;
  const { t } = useTranslation();

 
  return (
    <Fragment>
      {withError ? (
        <Alert variant="danger">
          {t("generic_error")}
        </Alert>
      ) : (
        <Fragment>
          <Row>
            <Col>
              <PokemonList />
            </Col>
          </Row>
          <Row>
            <Col>
              <PokemonListPager />
            </Col>
          </Row>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PokedexMain;
