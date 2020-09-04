import React from "react";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const PokemonStats = ({ pokemon }) => {
  const { t } = useTranslation();

  return (
    <Row className="mt-5 mb-5">
      <Col xs={6} lg={3}>
        <span className="stat-item">
          <strong>{t("hp")}:</strong> {pokemon.parsedStats.hp}{" "}
        </span>
      </Col>
      <Col xs={6} lg={3}>
        <span className="stat-item">
          <strong>{t("attack")}:</strong> {pokemon.parsedStats.attack}
        </span>
      </Col>

      <Col xs={6} lg={3}>
        <span className="stat-item">
          <strong>{t("defense")}:</strong> {pokemon.parsedStats.defense}{" "}
        </span>
      </Col>

      <Col xs={6} lg={3}>
        <span className="stat-item">
          <strong>{t("speed")}:</strong> {pokemon.parsedStats.speed}
        </span>
      </Col>
    </Row>
  );
};

export default PokemonStats;
