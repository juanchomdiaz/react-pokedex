import React, { useContext } from "react";

import { Link } from "react-router-dom";

import useImage from "hooks/useImage";
import PokedexContext from "contexts/pokedex/PokedexContext";

import { Card, Fade, Image } from "react-bootstrap";
import "./PokemonCard.scss";

import Skeleton from "react-loading-skeleton";

import PropTypes from 'prop-types';

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
              <div><p>#{pokemon.id}</p><p className="text-capitalize">{pokemon.name}</p></div>
            </Fade>
          )}
        </div>
      </Card>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonCard;
