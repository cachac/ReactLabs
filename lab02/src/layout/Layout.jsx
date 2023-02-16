import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="/src/assets/react.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React logo"
            />
          </Navbar.Brand>

          <Nav className="me-auto justify-content-center">
            {/* <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link> */}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/admin">
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
};
