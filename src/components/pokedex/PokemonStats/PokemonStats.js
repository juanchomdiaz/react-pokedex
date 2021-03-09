import React from "react";

import { useTranslation } from "react-i18next";

import { Row, Col } from "react-bootstrap";
import "./PokemonStats.scss";

import PropTypes from "prop-types";

const PokemonStats = ({ pokemon }) => {
  const { t } = useTranslation();

  return (
    <Row className="mt-5 mb-5 text-center">
      {pokemon.parsedStats.map((stat, index) => (
        <Col key={index} xs={6} lg={3} className="mb-2">
          <span className="stat-item">
            <strong>{t(stat.name)}:</strong> {stat.value}
          </span>
        </Col>
      ))}
    </Row>
  );
};

PokemonStats.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default PokemonStats;
