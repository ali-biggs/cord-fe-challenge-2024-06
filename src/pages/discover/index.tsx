import React, { useEffect, useState } from "react";
import styled from "styled-components";
import * as colors from "../../colors";
import * as fetcher from "../../utils/fetcher";
import useMediaQuery from "../../utils/useMediaQuery";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default function Discover() {
  // You don't need to keep the current structure of this state object. Feel free to restructure it as needed.
  const [state, setState] = useState({
    keyword: "",
    year: 0,
    results: [],
    movieDetails: null,
    totalCount: 0,
    genreOptions: [],
    ratingOptions: [
      { id: 7.5, name: 7.5 },
      { id: 8, name: 8 },
      { id: 8.5, name: 8.5 },
      { id: 9, name: 9 },
      { id: 9.5, name: 9.5 },
      { id: 10, name: 10 },
    ],
    languageOptions: [
      { id: "GR", name: "Greek" },
      { id: "EN", name: "English" },
      { id: "RU", name: "Russian" },
      { id: "PO", name: "Polish" },
    ],
  });

  const isMobile = useMediaQuery("(max-width: 480px)");

  const searchMovies = async (
    keyword: string | undefined,
    year: number | undefined
  ) => {
    // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
    const searchResults = await fetcher.getMovieByKeywordAndYear(keyword, year);
    setState((prevState) => ({
      ...prevState,
      results: searchResults,
    }));
  };

  const {
    genreOptions,
    languageOptions,
    ratingOptions,
    totalCount,
    results,
    movieDetails,
  } = state;

  // Write a function to preload the popular movies when page loads & get the movie genres
  const initialLoad = async () => {
    const popularMovies = await fetcher.getPopularMovies();
    const movieGenres = await fetcher.getGenreOptions();
    const totalCount = await fetcher.getTotalMovieCount();
    const languageOptions = await fetcher.getLanguageOptions();

    setState((prevState) => ({
      ...prevState,
      results: popularMovies,
      genreOptions: movieGenres,
      totalCount: totalCount,
      languageOptions: languageOptions,
    }));
  };

  useEffect(() => {
    initialLoad();
  }, []);

  return (
    <DiscoverWrapper>
      {isMobile && <MobilePageTitle>Discover</MobilePageTitle>}
      {totalCount > 0 && <TotalCounter>{totalCount} movies</TotalCounter>}
      <GridContainer>
        <MovieResults>
          <MovieList
            movies={(results as []) || []}
            genres={(genreOptions as []) || []}
          />
          {/* Each movie must have a unique URL and if clicked a pop-up should appear showing the movie details and the action buttons as shown in the wireframe */}
        </MovieResults>
        <MovieFilters>
          <SearchFilters
            genres={genreOptions}
            ratings={ratingOptions}
            languages={languageOptions}
            searchMovies={(
              keyword: string | undefined,
              year: number | undefined
            ) => searchMovies(keyword, year)}
          />
        </MovieFilters>
      </GridContainer>
    </DiscoverWrapper>
  );
}

const breakpoints = {
  mobile: "480px",
  desktop: "1024px",
};

const media = {
  mobile: `(max-width: ${breakpoints.mobile})`,
  desktop: `(max-width: ${breakpoints.desktop})`,
};

const DiscoverWrapper = styled.div`
  padding: 60px 35px;

  @media ${media.mobile} {
    padding: 20px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;

  @media ${media.mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const TotalCounter = styled.div`
  font-weight: 200;
  font-size: 0.8em;
  padding-bottom: 15px;

  @media ${media.mobile} {
    font-weight: 200;
    font-size: 0.6em;
    padding-bottom: 10px;
  }
`;

const MovieResults = styled.div``;

const MovieFilters = styled.div``;

const MobilePageTitle = styled.header`
  @media ${media.mobile} {
    display: visibile;
    font-size: 30px;
    padding-bottom: 15px;
  }
`;
