export const getPopularMovies= async () => {
    const response = await fetch("/movies-browser/popularMovies.json");
  
    if (!response.ok) {
      new Error(response.statusText);
    }
  
    return await response.json();
  };