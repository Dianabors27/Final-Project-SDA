import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <Navbar id="navbar-header" expand="lg">
      <Link to={"/"}>
        {" "}
        <Navbar.Brand className="d-flex">
          <img id="logo" alt="" src="/assets/images/architect.svg" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link id="nav-item" className="text-success mx-auto">
            <Link className="text-dark" to={"/"}>
              Home
            </Link>
          </Nav.Link>

          <NavDropdown
            title="Projects"
            id="basic-nav-dropdown"
            className="nav-dropdown mx-auto"
          >
            <NavDropdown.Item>
              {" "}
              <Link className="text-dark" to={"/projects/imobil-cluj"}>
                Imobil Cluj
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              {" "}
              <Link to={"/projects/amenajare-apartament"}>
                Amenajare apartament
              </Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              {" "}
              <Link to={"/projects/locuinta-deva"}>Locuinta Deva</Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              {" "}
              <Link to={"/projects/amenajare-living"}>Amenajare living</Link>
            </NavDropdown.Item>

            <NavDropdown.Item>
              {" "}
              <Link to={"/projects/blocuri-sibiu"}>Blocuri Sibiu</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link id="nav-item" className="text-success mx-auto">
            <Link className="text-dark" to={"/about"}>
              About
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
