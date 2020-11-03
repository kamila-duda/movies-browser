const localStorageKey = "favoriteMovies";

export const saveMovieInLocalStorage = (movie) => {
    localStorage.setItem(localStorageKey, JSON.stringify(movie));}

export const getMoviesFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localStorageKey)) || [];