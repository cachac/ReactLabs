import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Page({ back }) {
  const [validated, setValidated] = useState(false);

  const register = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={register}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter full name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">ejemplo@mail.com</Form.Text>
        {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control required type="password" placeholder="Password" />
      </Form.Group>

      <Row>
        <Col>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col>
          <Button variant="success" type="button" onClick={back}>
            Volver
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
