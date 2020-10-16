import { apiKey } from "features/apiKey";

const language = "en-US";
const page = 1; //tutaj będzie się to zmieniało we właściwym miejscu dynamicznie
const movieId = 1; //tutaj będzie się to zmieniało we właściwym miejscu dynamicznie
const dataToFetch = {
  configurationData: `
  https://api.themoviedb.org/3/configuration?api_key=${apiKey}`,
  genresData: `
  https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language==${language}`,
  popularMoviesData: `
  https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=${language}&page=${page}`,
  movieCreditsData: `
  https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  popularPeopleData: `
  https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&language=${language}&page=${page}`,
};

export const getDataApi = async (dataType) => {
  try {
    const response = await fetch(dataToFetch[dataType]);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const fetchedData = await response.json();
    return fetchedData;
  } catch (error) {
    console.error("ups");
  }
};
