import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
const App = () => {
  const [movies, setMovies] = useState([
    {
      id: "gohdjdhdhd",
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: ["Sci-Fi", "Thriller"],
      rating: 8.8,
      posterUrl: "https://i.ytimg.com/vi/HTLPULt0eJ4/maxresdefault.jpg",
    },
    {
      id: "ddhsgfjtfrhrft",
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: ["Drama"],
      rating: 9.3,
      posterUrl: "https://i.ytimg.com/vi/HTLPULt0eJ4/maxresdefault.jpg",
    },
    {
      id: "rgergeghgh",
      title: "The Dark Knight",
      director: "Christopher Nolan",
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      posterUrl: "https://i.ytimg.com/vi/HTLPULt0eJ4/maxresdefault.jpg",
    },
  ]);
  // movie create update function
  const onCreateNewMovie = (movieData) => {
    return setMovies([...movies, movieData]);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <MovieList movies={movies} />
          <MovieForm onCreateNewMovie={onCreateNewMovie} />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default App;
