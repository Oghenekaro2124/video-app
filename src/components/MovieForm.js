import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";

const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");

  // Title Update Function
  const updateTitleHandler = (event) => {
    return setTitle(event.target.value);
  };

  // Description Update Function
  const updateDescriptionHandler = (event) => {
    return setDescription(event.target.value);
  };

  // Poster Url Update Function
  const updatePosterUrlHandler = (event) => {
    return setPosterUrl(event.target.value);
  };

  // create new movie function
  const CreateNewMovie = (event) => {
    // prevent default form submission behaviour
    event.preventDefault();

    if (!title || !description || !posterUrl) {
      return;
    }
    const movieData = {
      id: Math.floor(Math.random() * 1000000) + "sgrtiudh",
      title,
      description,
      posterUrl,
    };

    props.onCreateNewMovie(movieData);

    setTitle("");
    setDescription("");
    setPosterUrl("");
    return;
  };

  return (
    <Fragment>
      <div className="mt-5 mb-3">
        <h3>Create New Movie </h3>
      </div>
      <Form onSubmit={CreateNewMovie}>
        <Form.Group className="mb-3">
          <Form.Control
            value={title}
            placeholder="Enter Title"
            type="text"
            onChange={updateTitleHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={description}
            placeholder="Enter Description"
            type="text"
            onChange={updateDescriptionHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={posterUrl}
            placeholder="Poster Url"
            type="text"
            onChange={updatePosterUrlHandler}
          />
        </Form.Group>
        <Button type="submit" variant="secondary">
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default MovieForm;
