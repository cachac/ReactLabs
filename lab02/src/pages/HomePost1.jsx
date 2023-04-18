import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import { useFetch } from "../hooks/Fetch";

export default function Page() {
  const { data, isLoading, isError, runFetch } = useFetch();

  useEffect(() => {
    runFetch({ url: `http://localhost:3001/post/readAll`, method: "GET" });
  }, []);

  const List = () => {
    return data.map((i) => {
      return (
        <ListGroup.Item key={i._id}>
          <Card>
            <Card.Title>{i.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {i.author}
            </Card.Subtitle>
            <Card.Body>{i.createdAt}</Card.Body>
          </Card>
        </ListGroup.Item>
      );
    });
  };

  return (
    <>
      {isError && <div>Ha ocurrido un error</div>}
      {num}
      <Form>
        <Form.Group>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <ListGroup>
              <List />
            </ListGroup>
          )}
        </Form.Group>
      </Form>
    </>
  );
}
