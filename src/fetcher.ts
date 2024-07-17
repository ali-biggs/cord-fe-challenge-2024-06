import axios from "axios";

export const getGenreOptions = async (languageCode: string = "en") => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?language=${languageCode}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
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
      `https://api.themoviedb.org/3/configuration/languages`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
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
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&vote_average.gte=${vote}&vote_average.lte=${vote}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
        },
      }
    );
    console.log("min vote response", response);
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving min vote: ", error);
    return error;
  }
};

export const getMovieByKeywordAndYear = async (year?: number, keyword?: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?year=${year}&sort_by=popularity.desc&with_keywords=${keyword}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
        },
      }
    );
    console.log("year and keyword response", response);
    return response.data.results;
  } catch (error) {
    console.log("Error retreiving min vote: ", error);
    return error;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
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
      `https://api.themoviedb.org/3/discover/movie`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
        },
      }
    );
    console.log("popular response", response);
    return response.data.total_results;
  } catch (error) {
    console.log("Error retreiving popular movies: ", error);
    return error;
  }
};

export const getMovieDetails = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTdlMjRhMjNkZDBkM2YxODgyZjI3NjNlYTE2NWE4NiIsIm5iZiI6MTcyMTIwMjQ5Mi4zMzI3OTYsInN1YiI6IjY2OTc3NjZmZWMzYzIxODljZTUwODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sZ_kvnjhjqeBNXC9eDFFk5oYN5FND6lrjDzL8K3KD6Q`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error retreiving movie details: ", error);
    return error;
  }
};


