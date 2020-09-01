import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Link to="/pokedex">
        <Navbar.Brand>
          <img alt="" src="/logo.svg" width="40" height="40" className="logo" />{" "}
          <div className="brand-name">Pokedex</div>
        </Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default Header;
