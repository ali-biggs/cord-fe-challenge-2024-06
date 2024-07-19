import React from "react";
import styled, { css } from "styled-components";
import * as colors from "../../colors";

interface MoviePosterProps {
  imageUrl: string;
}

type MovieItemProps = {
  movie: {
    poster_path: string;
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
    genre_ids: number[];
  };
  genreList: { id: number; name: string }[];
};

export default function MovieItem({ movie, genreList }: MovieItemProps) {
  console.log("movie in MovieItem", movie);

  const getGenreLabels = (
    ids: number[],
    genreList: { id: number; name: string }[]
  ): string => {
    const unformattedLabels = ids.map((id: number) => {
      const genre = genreList.find((genre) => genre.id === id);
      return genre ? genre.name : "Unknown";
    });
    const formattedLabels = unformattedLabels.join(" | ");
    return formattedLabels;
  };

  return (
    // The MovieItemWrapper must be linked to the movie details popup
    <MovieItemWrapper>
      <LeftCont>
        <MoviePoster
          alt="Movie poster image"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      </LeftCont>
      <RightCont>
        <MovieHeader>
          <MovieTitle>{movie.title}</MovieTitle>
          <RatingBox>{movie.vote_average.toFixed(1)}</RatingBox>
        </MovieHeader>
        <GenreRow>
          <Genre>{getGenreLabels(movie.genre_ids, genreList)}</Genre>
        </GenreRow>
        <MovieDescription>{movie.overview}</MovieDescription>
        <MovieRelease>{movie.release_date}</MovieRelease>
      </RightCont>
    </MovieItemWrapper>
  );
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 1px;
  padding: 10px;
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const MoviePoster = styled.img`
  width: 100%;
  height: auto;
`;

const RightCont = styled.div`
  display: inline-block;
`;

const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
`;

const MovieTitle = styled.div`
  font-size: 1.3em;
  font-weight: 900;
  color: ${colors.fontColor};
`;

const RatingBox = styled.div`
  font-weight: 700;
  color: white;
  background-color: ${colors.primaryColor};
  padding: 3px;
  border-radius: 5px;
`;

const GenreRow = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const Genre = styled.div`
  font-size: 1em;
  font-weight: 700;
  color: ${colors.primaryColor};
`;

const MovieDescription = styled.div`
  display: inline-block;
  padding-left: 15px;
  padding-right: 15px;
  color: ${colors.fontColor};
`;

const MovieRelease = styled.div`
  margin-top: 20px;
  padding-left: 15px;
  font-size: 0.8em;
  font-weight: 500;
  color: ${colors.primaryColor};
`;
