import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = (props) => {
  return (
    <Card style={{ width: "100%" }} className="mb-3">
      <Card.Img variant="top" src={props.movie.posterUrl} />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>
          {props.movie.director} | {props.movie.year}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
