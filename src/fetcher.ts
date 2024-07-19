import axios from "axios";

export const getGenreOptions = async (languageCode: string = "en") => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/genre/movie/list?language=${languageCode}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.genres;
  } catch (error) {
    console.log("Error retreiving genres: ", error);
  }
};

export const getLanguageOptions = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/configuration/languages`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    console.log("language response", response);
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving languages: ", error);
  }
};

export const getMovieByMinVote = async (vote: number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/discover/movie?sort_by=popularity.desc&vote_average.gte=${vote}&vote_average.lte=${vote}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving min vote: ", error);
    return error;
  }
};

export const getMovieByKeywordAndYear = async (
  year?: number,
  keyword?: string
) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/discover/movie?year=${year}&sort_by=popularity.desc&with_keywords=${keyword}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving min vote: ", error);
    return error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/movie/popular`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving popular movies: ", error);
    return error;
  }
};

export const getTotalMovieCount = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/discover/movie`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data.total_results;
  } catch (error) {
    console.log("Error retreiving popular movies: ", error);
    return error;
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_TMDB_PUBLIC_URL}/movie/${id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error retreiving movie details: ", error);
    return error;
  }
};
