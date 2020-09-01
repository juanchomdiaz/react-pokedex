import React, { useContext } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { Button, Row, Col } from "react-bootstrap";

const PokemonListPager = () => {
  const pokedexContext = useContext(PokedexContext);
  const { loading, hasPrevious, hasNext, fetchPrevious, fetchNext } = pokedexContext;

  const handlePreviousClick = () => {
    fetchPrevious();
  }

  const handleNextClick = () => {
    fetchNext();
  }

  return (
    !loading && (
      <Row className="justify-content-md-center">
        <Col>
          <Button
            variant="dark"
            className="pull-left"
            disabled={!hasPrevious}
            onClick={handlePreviousClick}
          >
            Previous
          </Button>
        </Col>
        <Col>
          <Button
            variant="dark"
            className="pull-right"
            disabled={!hasNext}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Col>
      </Row>
    )
  );
};

export default PokemonListPager;
