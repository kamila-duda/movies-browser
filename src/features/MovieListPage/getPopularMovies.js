import { apiKey } from "features/apiKey";
const language = "en-US";
const page = 1;

export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.json();
};