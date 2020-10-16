import {apiKey} from "../apiKey";
export const getPopularMovies = async () => {
  try {
    const response = await fetch("/movies-browser/popularMovies.json");

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
    const response = await fetch("/movies-browser/genre.json");

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
    const response = await fetch("/movies-browser/popularPeople.json");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const people = await response.json();
    return people;
  } catch (error) {
    console.error("ups");
  }
};
export const getMovieCredits = async (movieId) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const credits = await response.json();
    console.log(credits)
    return credits;
  } catch (error) {
    console.error("ups");
  }
};
