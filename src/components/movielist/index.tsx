import React from "react";
import styled from "styled-components";

import MovieItem from "../movieitem";

// Add types for the props of 'MovieList'
type MovieListProps = {
  // movies, genres
  movies: [];
  genres: [];
};

export default function MovieList({ movies, genres }: MovieListProps) {
  //console.log("movies in movie list", movies)
  const testArray = movies.slice(0, 1)
  return (
    <MoviesWrapper>
      {/* Finish the MovieItem component and use it here to display the movie results */}
      {testArray.map((movie, index) => {
        return <MovieItem movie={movie} genreList={genres} />;
      })}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;
