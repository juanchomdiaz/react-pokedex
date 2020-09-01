import React, {useContext} from "react";
import { Card } from "react-bootstrap";
import "./PokemonCard.scss";
import Skeleton from "react-loading-skeleton";
import PokedexContext from "../../context/pokedex/PokedexContext";

const PokemonCard = ({ pokemon }) => {
  const pokedexContext = useContext(PokedexContext);
  const { loading } = pokedexContext;

  return (
    <Card className="mb-4">
      {loading ? 
        <Skeleton circle={true} height={150} width={150} /> 
      :  
      <Card.Img
        variant="top"
        src={pokemon.sprites.other.dream_world.front_default}
      />
      }
      <Card.Body>
        {loading ? <Skeleton /> : <Card.Text>pokemon.name</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default PokemonCard;
