import React, { useContext, Fragment } from "react";

import { useTranslation } from "react-i18next";

import PokedexContext from "contexts/pokedex/PokedexContext";
import { scrollToTop } from "helpers/ui";

import { Button, Row, Col } from "react-bootstrap";
import "./PokemonListPager.scss";

const PokemonListPager = () => {
  const { t } = useTranslation();

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
      {isReady && (
        <Row className="mb-4">
          <Col lg={{ span: 10, offset: 1 }} md={12}>
            <Button
              variant="dark"
              className="float-left"
              disabled={!hasPrevious}
              onClick={handlePreviousClick}
            >
              {t("previous")}
            </Button>

            <Button
              variant="dark"
              className="float-right"
              disabled={!hasNext}
              onClick={handleNextClick}
            >
              {t("next")}
            </Button>
          </Col>
        </Row>
      )}
    </Fragment>
  );
};

export default PokemonListPager;
