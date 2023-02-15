import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Admin</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container fluid>{children}</Container>
    </>
  );
};
