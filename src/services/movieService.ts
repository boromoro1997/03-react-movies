import axios from "axios";
import type { Movie } from "../types/movie.ts"
interface SerchResponse {
  results: Movie[];
}
const url ='https://api.themoviedb.org/3/search/movie?query=';
const myKey = import.meta.env.VITE_TMDB_TOKEN
const params =
{ 
    method: 'GET',
    params: {
        include_adult: false,
        language: "en-US"
  },
    headers: {
    Authorization: `Bearer ${myKey}`,
  }
}

export default async function fetchMovies(searchedWord:string):Promise<Movie[]> {
  const response = await axios.get<SerchResponse>(url + searchedWord, params)
  console.log(response);
    return response.data.results;
}