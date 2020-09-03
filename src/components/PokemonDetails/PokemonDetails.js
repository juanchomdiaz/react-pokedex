import React, { Fragment, useContext, useEffect } from "react";
import PokedexContext from "../../context/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";
import Skeleton from "react-loading-skeleton";
import { Button, Row, Card, Col } from "react-bootstrap";
import styled from "styled-components";

//Using styled component, just for the sake to show another way to style 
const StyledCard = styled(Card)`
  .card-img-top {
    max-height: 250px;
  }
`; 

const PokemonDetails = ({ history, match }) => {
  const pokedexContext = useContext(PokedexContext);
  const { fetchPokemonDetails, currentPokemon } = pokedexContext;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetchPokemonDetails(match.params.name);
  }, []);

  useEffect(() => {
    console.log("lng changed");
  }, [i18n.language]);

  return (
    <Fragment>
      <Row>
        <Col>
          <StyledCard>
            {currentPokemon ? <Card.Img variant="top" src={currentPokemon.sprites.other.dream_world.front_default} /> : <Skeleton circle={true} height={200} width={200}/>}
            <Card.Body>
              <Card.Title>{match.params.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </StyledCard>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={{ span: 2, offset: 5 }}>
          <Button onClick={() => history.goBack()}>{t("go_back")}</Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default PokemonDetails;
