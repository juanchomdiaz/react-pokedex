import React, { Fragment, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import PokemonList from "../PokemonList";
import PokemonListPager from "../PokemonListPager";

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
