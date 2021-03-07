import React from "react";

import useImage from "hooks/useImage";

import { Fade, Image } from "react-bootstrap";
import './PokemonImage.scss';

import PropTypes from 'prop-types';

const PokemonImage = ({ pokemon }) => {
  const imageSrc = pokemon.sprites.other.dream_world.front_default;
  const { image, isLoaded } = useImage({ src: imageSrc });

  return (
    <Fade timeour={500} appear={true} in={isLoaded}>
      <Image className="pokemon-img" src={image.src} alt={pokemon.name} />
    </Fade>
  );
};

PokemonImage.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonImage;
