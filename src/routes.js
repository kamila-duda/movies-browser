export const toMoviesList = () => "/movies";
export const toMoviesNextPage = ({ page } = { page: 1 }) => `/movies/page=${page}`;
export const toMovieDetails = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPeopleList = () => "/people";
export const toPersonDetails = ({ id } = { id: ":id" }) => `/people/${id}`;