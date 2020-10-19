import { apiKey } from "../apiKey";
const language = "en-US";
const page = 1; //tutaj będzie się to zmieniało we właściwym miejscu dynamicznie

export const getConfigurationData = async () => {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/configuration?api_key=${apiKey}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error("ups");
  }
};
export const getPopularMovies = async () => {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`);

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
    const response = await fetch(`
    https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language==${language}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const genres = await response.json();
    return genres;
  } catch (error) {
    console.error("ups");
  }
};
export const getPopularPeople = async () => {
  try {
    const response = await fetch(`
    https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=${language}&page=${page}`);

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
