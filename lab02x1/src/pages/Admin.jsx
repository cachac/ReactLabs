import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Session";

export default function Page() {
  const navigate = useNavigate();
  const { session } = useAuth();

  return (
    <>
      {session?.state ? (
        <>
          <div>Admin</div>
          {session.name}--{session.id}
        </>
      ) : (
        <Card className="m-auto" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>No Autorizado 👾</Card.Title>
            <Card.Text>Debe registrar se para acceder a esta página.</Card.Text>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
