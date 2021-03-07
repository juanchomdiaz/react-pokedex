import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";
import LanguageSelector from "components/common/ui/LanguageSelector";

const Header = () => {
  return (
    <Navbar bg="light" variant="light" className="justify-content-between">
      <Link to="/pokedex">
        <Navbar.Brand>
          <img alt="Pokedex React" src="/images/svg/logo.svg" width="40" height="40" className="logo" />{" "}
          <div className="brand-name">Pokedex</div>
        </Navbar.Brand>
      </Link>
      <LanguageSelector />
    </Navbar>
  );
};

export default Header;
