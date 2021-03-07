import React, { Fragment, useContext } from "react";
import Header from "./Header";
import { Container, Alert } from "react-bootstrap";
import PokedexContext from "contexts/pokedex/PokedexContext";
import { useTranslation } from "react-i18next";

const AppLayout = ({ children }) => {
  const pokedexContext = useContext(PokedexContext);
  const { withError } = pokedexContext;
  const { t } = useTranslation();

  return (
    <Fragment>
      <Header />

      {withError ? (
        <Alert variant="danger">{t("generic_error")}</Alert>
      ) : (
        <Container fluid className="mt-5">
          {children}
        </Container>
      )}
    </Fragment>
  );
};

export default AppLayout;
