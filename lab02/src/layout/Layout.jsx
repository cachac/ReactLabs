import React, { useEffect, useRef, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "../context/Session";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { session } = useAuth();
  const calledOnce = useRef(false);

  useEffect(() => {
    if (calledOnce.current) return;

    console.log("Navigate to Home");
    console.log("pathname", location.pathname);
    if (location.pathname === "/") navigate("/home");

    calledOnce.current = true;
  }, []);

  return session ? (
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
            {/* <Nav.Link>Home</Nav.Link> */}
            {/* <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link> */}
            <LinkContainer to="/home">
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
  ) : (
    <Container className="mt-4 m-auto">
      <h2 className="login-title">- Loading Session -</h2>
      <Spinner animation="grow" variant="info" />
    </Container>
  );
};
