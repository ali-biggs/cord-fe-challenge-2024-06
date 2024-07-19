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
  const testArray = movies.slice(0, 3);
  return (
    <MoviesWrapper>
      {testArray.map((movie, index) => {
        return (
          <MovieContainer key={index}>
            <MovieItem movie={movie} genreList={genres} />
          </MovieContainer>
        );
      })}
    </MoviesWrapper>
  );
}

const MoviesWrapper = styled.div`
  position: relative;
`;

const MovieContainer = styled.div`
  padding-bottom: 15px;
`;
