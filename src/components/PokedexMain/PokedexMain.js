import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Header";
import PokemonList from "../PokemonList";
import PokemonListPager from "../PokemonListPager";

const PokedexMain = () => {
  return (
    <Fragment>
      <Header />

      <Container fluid>
        <Row>
          <PokemonList />
          <PokemonListPager />
        </Row>
      </Container>
    </Fragment>
  );
};

export default PokedexMain;
