import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user-info"));

  function logOut() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link to="/">View Product</Link>
                <Link to="/add">Add Product</Link>
                <Link to="/search">Search Product</Link>
                {/* <Link to="/update">Update Product</Link> */}
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") && (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
