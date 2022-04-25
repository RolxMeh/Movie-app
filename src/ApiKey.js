export const APIKEY = "4a2ff99ae1433228a24a2058f014a2a4";

const requests = {
  trending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  netflixOriginals: `/discover/tv?api_key=${APIKEY}&with_network=213`,
  topRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  comedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  actionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  horrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
