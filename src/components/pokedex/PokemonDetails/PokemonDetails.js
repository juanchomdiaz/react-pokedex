import React, { Fragment, useContext, useEffect } from "react";
import PokedexContext from "../../../context/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import { loadAbilitiesTranslations } from "../../../utils/helpers";
import PokemonStats from "../PokemonStats/PokemonStats";
import PokemonAbilities from "../PokemonAbilities/PokemonAbilities";
import { StyledCard } from "./PokemonDetails.styled";
import { Button, Row, Card, Col } from "react-bootstrap";
import PokemonImage from "../PokemonImage/PokemonImage";
import PropTypes from 'prop-types';

const PokemonDetails = ({ history, match }) => {
  const pokedexContext = useContext(PokedexContext);
  const { fetchPokemonDetails, currentPokemon } = pokedexContext;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchPokemonDetails(match.params.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!currentPokemon) return;

    loadAbilitiesTranslations(currentPokemon.expanded_abilities, i18n);
    //Force onChangeLanguage fire
    i18n.changeLanguage(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPokemon]);


  return (
    <Fragment>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <StyledCard className="shadow mb-5 bg-white rounded">
            <Card.Title className="text-capitalize text-center mb-4">
              {currentPokemon ? currentPokemon.name : <Skeleton />}
            </Card.Title>
            {currentPokemon ? (
              <PokemonImage pokemon={currentPokemon} />
            ) : (
              <div className="text-center">
                <Skeleton circle={true} height={200} width={200} />
              </div>
            )}
            <Card.Body>
              {currentPokemon  ? (
                <PokemonStats pokemon={currentPokemon} />
              ) : (
                <Skeleton />
              )}
              {currentPokemon  ? (
                <PokemonAbilities pokemon={currentPokemon} />
              ) : (
                <Skeleton count={7} />
              )}
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={{ span: 6, offset: 3 }} md={{ span: 4, offset: 4 }} className="text-center">
          <Button onClick={() => history.goBack()}>{t("go_back")}</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

PokemonDetails.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default PokemonDetails;
