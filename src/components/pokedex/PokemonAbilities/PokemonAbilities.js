import React from "react";
import { useTranslation } from "react-i18next";

import { Badge, Jumbotron } from "react-bootstrap";

import PropTypes from 'prop-types';

const PokemonAbilities = ({ pokemon }) => {
  const { t } = useTranslation();

  return (

        <Jumbotron>
          <div className="card-abilities">
            <h5 className="text-center mb-5">{t("abilities")}</h5>
            {pokemon.abilities.map((ab) => (
              <div key={ab.ability.name}>
                <h5>
                  <Badge variant="dark">
                    {t(ab.ability.name.replace("-", "_"))}
                  </Badge>
                </h5>
                <p>{t(ab.ability.name.replace("-", "_").concat("_desc"))}</p>
              </div>
            ))}
          </div>
        </Jumbotron>
      
  );
};

PokemonAbilities.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonAbilities;
