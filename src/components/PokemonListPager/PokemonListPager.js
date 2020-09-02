import React, { useContext, Fragment } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { Button, Row, Col } from "react-bootstrap";
import { scrollToTop } from "../../utils/helpers";

const PokemonListPager = () => {
  const pokedexContext = useContext(PokedexContext);
  const {
    isReady,
    hasPrevious,
    hasNext,
    fetchPrevious,
    fetchNext,
  } = pokedexContext;


  const handlePreviousClick = () => {
    fetchPrevious();
    scrollToTop();
  };

  const handleNextClick = () => {
    fetchNext();
    scrollToTop();
  };

  return (
    <Fragment>
      {isReady && 
        <Row className="mb-4">
          <Col lg={{ span: 10, offset: 1 }} md={12}>
            <Button
              variant="dark"
              className="float-left"
              disabled={!hasPrevious}
              onClick={handlePreviousClick}
            >
              Previous
            </Button>

            <Button
              variant="dark"
              className="float-right"
              disabled={!hasNext}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Col>
        </Row>
      }
    </Fragment>
  );
};

export default PokemonListPager;
