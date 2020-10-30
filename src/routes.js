export const toMoviesList = () => "/movies";
export const toMovieDetails = ({ id } = { id: ":id" }) => `/movies/${id}`;
export const toPeopleList = () => "/people";
export const toPersonDetails = ({ id } = { id: ":id" }) => `/people/${id}`;