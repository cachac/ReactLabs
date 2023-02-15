import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Page() {
  return (
    <Card className="m-auto" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>No Autorizado 👾</Card.Title>
        <Card.Text>Debe registrar se para acceder a esta página.</Card.Text>
        <Button variant="primary" onClick={() => navigate("/login")}>
          Login
        </Button>
      </Card.Body>
    </Card>
  );
}
