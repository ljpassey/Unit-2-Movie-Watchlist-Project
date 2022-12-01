import React from "react";

import MovieCard from "./MovieCard";

const MovieScreen = ({
  movieList,
  page,
  setPage,
  list,
  addMovie,
  removeMovie,
}) => {

  const movieDisplay = movieList.map((movie, index) => {
    return (
      <MovieCard
        addMovie={addMovie}
        movie={movie}
        list={list}
        removeMovie={removeMovie}
      />
    );
  });

  const increment = () => {setPage(page + 1)}
  const decrement = () => {setPage(page - 1)}

  return (
    <div className="page">
      <h1>Add a movie to your watchlist</h1>
      <h3>Page: {page}</h3>
      <div className="btn-container">
        <button onClick={page !== 1 ? decrement : undefined}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
      <br></br>
      <h3>Page: {page}</h3>
      <div className="btn-container">
        <button onClick={page !== 1 ? decrement : undefined}>Previous</button>
        <button onClick={increment}>Next</button>
      </div>
    </div>
  );
};

export default MovieScreen;
