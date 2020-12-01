import { apiKey } from "../apiKey";
const language = "en-US";

export const getConfigurationData = async () => {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const configurationFile = await response.json();
    return configurationFile;
  } catch (error) {
    console.error("ups");
  }
};

export const getPopularMovies = async ({ currentPage, query }) => {
  try {
    const path = query
      ? `
    https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${currentPage}`
      : `
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${currentPage}`;
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("ups");
  }
};
export const getGenres = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error("ups");
  }
};
export const getPopularPeople = async ({ currentPage, query }) => {
  try {
    const path = query
      ? `
    https://api.themoviedb.org/3/search/person?api_key=${apiKey}&language=${language}&query=${query}&page=${currentPage}`
      : `
    https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=${language}&page=${currentPage}`;
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const people = await response.json();
    return people;
  } catch (error) {
    console.error("ups");
  }
};
export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US&append_to_response=credits`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const details = await response.json();
    return details;
  } catch (error) {
    console.error("ups");
  }
};
export const getPersonDetails = async (personId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${apiKey}&language=en-US&append_to_response=movie_credits`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const details = await response.json();
    return details;
  } catch (error) {
    console.error("ups");
  }
};
