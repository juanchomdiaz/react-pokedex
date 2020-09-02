import React, { Fragment, useContext } from "react";
import { Row, Col, Alert } from "react-bootstrap";
import PokemonList from "../PokemonList";
import PokemonListPager from "../PokemonListPager";
import PokedexContext from "../../context/pokedex/PokedexContext";

const PokedexMain = () => {
  const pokedexContext = useContext(PokedexContext);
  const { withError } = pokedexContext;

  const doRefreshPage = () => {
    window.location.reload(false);
  }
 
  return (
    <Fragment>
      {withError ? (
        <Alert variant="danger">
          An error has occured. Please{" "}
          <Alert.Link href="!#" onClick={() => doRefreshPage()}>
            refresh
          </Alert.Link>{" "}
          this page.
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
