import React, { Fragment } from "react";

import { Row, Col } from "react-bootstrap";

import PokemonList from "components/pokedex/PokemonList";
import PokemonListPager from "components/pokedex/PokemonListPager";

const PokedexMain = () => {
  return (
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
  );
};

export default PokedexMain;
