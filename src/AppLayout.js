import React, { Fragment } from "react";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

const AppLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      
      <Container fluid className="mt-5">
        {children}
      </Container>
    </Fragment>
  );
};

export default AppLayout;
