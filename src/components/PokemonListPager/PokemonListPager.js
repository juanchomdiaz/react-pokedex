import React, { useContext, Fragment } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { Button, Row, Col } from "react-bootstrap";

const PokemonListPager = () => {
  const pokedexContext = useContext(PokedexContext);
  const {
    isLoading,
    isFullyLoaded,
    hasPrevious,
    hasNext,
    fetchPrevious,
    fetchNext,
  } = pokedexContext;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {!isLoading && 
        <Row className="mb-4">
          <Col lg={{ span: 10, offset: 1 }} md={12}>
            <Button
              variant="dark"
              className="float-left"
              disabled={!isFullyLoaded || !hasPrevious}
              onClick={handlePreviousClick}
            >
              Previous
            </Button>

            <Button
              variant="dark"
              className="float-right"
              disabled={!isFullyLoaded || !hasNext}
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
