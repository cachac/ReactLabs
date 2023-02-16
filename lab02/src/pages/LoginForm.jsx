import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Page() {
  const login = (e) => {
    e.preventDefault();
  };
  const register = () => {};

  return (
    <Card className="m-auto p-3" style={{ width: "18rem" }}>
      <Form onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">ejemplo@mail.com</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col>
            {/* https://getbootstrap.com/docs/4.0/utilities/colors/ */}
            <Button variant="success" type="button" onClick={register}>
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
