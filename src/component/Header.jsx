// Header.js
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <>
      {/* Top Header Start */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="search">
                <input type="text" placeholder="Search" />
                <button>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="social">
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Header End */}

      {/* Header Start */}
      <div className="header">
        <div className="container">
          <Navbar expand="md" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse">
              <Nav className="m-auto">
                <Nav.Link href="/" className="active">
                  Home
                </Nav.Link>
                <Nav.Link href="#">Sports</Nav.Link>
                <Nav.Link href="#">Tech</Nav.Link>
                <Nav.Link href="#">Fashion</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Sub Item 1</NavDropdown.Item>
                  <NavDropdown.Item href="#">Sub Item 2</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="single-page">Single Page</Nav.Link>
                <Nav.Link href="contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
      {/* Header End */}
    </>
  );
};

export default Header;
