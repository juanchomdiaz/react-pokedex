import React, { useContext } from "react";
import { Card, Fade, Image } from "react-bootstrap";
import "./PokemonCard.scss";
import Skeleton from "react-loading-skeleton";
import PokedexContext from "../../context/pokedex/PokedexContext";
import useImage from "../../Hooks/useImage";
import { Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const pokedexContext = useContext(PokedexContext);
  const { isReady } = pokedexContext;
  const imageSrc = pokemon && pokemon.sprites.other.dream_world.front_default;
  const { image, isLoaded } = useImage({ src: imageSrc });

  return (
    <Link to={`/pokedex/${pokemon && pokemon.name}`}>
      <Card className="shadow p-3 mb-5 bg-white rounded">
        <div className="card-img__wrapper">
          <div className="card-img__inner">
            {!(isReady && isLoaded) ? (
              <Skeleton circle={true} height={150} width={150} />
            ) : (
              <Fade timeour={500} appear={true} in={true}>
                <Image
                  className="card-img"
                  src={image.src}
                  alt={pokemon && pokemon.name}
                />
              </Fade>
            )}
          </div>
        </div>
        <div className="card-name__wrapper">
          {!(isReady && isLoaded) ? (
            <Skeleton />
          ) : (
            <Fade in={isLoaded}>
              <div><p>#{pokemon.id}</p><p class="text-capitalize">{pokemon.name}</p></div>
            </Fade>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default PokemonCard;
