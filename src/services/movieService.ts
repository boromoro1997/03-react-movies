import axios from "axios";
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

export default async function fetchMovies(searchedWord:string) {
    const response = await axios.get(url+searchedWord, params)
    return response;
}