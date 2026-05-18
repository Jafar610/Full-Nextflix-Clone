const API_KEY = "5f20a689ebb667fb85a6dbd3b6f26c42";
const BASE_URL = "https://api.themoviedb.org/3";

export const requests = {
  trending: `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
  popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horror: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romance: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  animation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  documentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,
  originals:`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
};