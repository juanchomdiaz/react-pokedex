import React from "react";
import { Card } from "react-bootstrap";
import "./PokemonCard.scss";

const PokemonCard = ({ pokemon }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Text>
          {pokemon.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
