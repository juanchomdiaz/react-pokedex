import React, { useContext } from "react";
import { Card, Fade, Image } from "react-bootstrap";
import "./PokemonCard.scss";
import Skeleton from "react-loading-skeleton";
import PokedexContext from "../../context/pokedex/PokedexContext";
import useImage from "../../Hooks/useImage";

const PokemonCard = ({ pokemon }) => {
  const pokedexContext = useContext(PokedexContext);
  const { isFullyLoaded } = pokedexContext;
  const imageSrc = pokemon.sprites.other.dream_world.front_default;
  const { image, isLoaded } = useImage({src: imageSrc});

  return (
    <Card className="mb-4 shadow p-3 mb-5 bg-white rounded">
      <div className="card-img__wrapper">
        <div className="card-img__inner">
          {!(isFullyLoaded && isLoaded) ? (
            <Skeleton circle={true} height={150} width={150} />
          ) : (
            <Fade timeour={500} appear={true} in={true}>
                <Image className="card-img" src={image.src} alt={pokemon.name}/>
            </Fade>
          )}
        </div>
      </div>
      <div className="card-name__wrapper">
        {!(isFullyLoaded && isLoaded) ? (
          <Skeleton />
        ) : (
          <Fade in={isLoaded}>
            <div>{pokemon.name}</div>
          </Fade>
        )}
      </div>
    </Card>
  );
};

export default PokemonCard;
