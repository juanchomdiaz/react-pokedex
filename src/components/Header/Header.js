import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="light" variant="light">
      <Link to="/pokedex">
        <Navbar.Brand>
          <img alt="" src="/logo.svg" width="40" height="40" className="logo" />{" "}
          <div class="brand-name">Pokedex</div>
        </Navbar.Brand>
      </Link>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Header;
