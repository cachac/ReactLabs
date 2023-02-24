import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Register from "../components/register02";
import { useAuth } from "../context/Session";

export default function Page() {
  const [validated, setValidated] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, signUp } = useAuth();

  const login = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    await setValidated(true);

    signIn({ email, password });
  };

  const register = () => {
    setShowRegister(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  return (
    <Card className="m-auto p-3" style={{ width: "18rem" }}>
      {!showRegister ? (
        <Form noValidate validated={validated} onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">ejemplo@mail.com</Form.Text>
            {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
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
      ) : (
        <Register back={() => setShowRegister(false)}></Register>
      )}
    </Card>
  );
}
