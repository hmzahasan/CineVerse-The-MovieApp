import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;


export const getMovies = async () => {

    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
  
    return  movies.data.results;
  };



  export const getMovieDetails = async (id) => {

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
  
    return response.data;
  };

  export const getTrailers= async()=>{
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`
    );
    return response.data.results
  };

  export const getVideos = async(id)=>{

    const responses= await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    );
    return responses.data
  }

  export const searchMovies = async (query) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US`
    );
  
    return response.data.results;
  };



  export const getAllMovies = async (number) => {

    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${number}`
    );
  
    return  movies.data.results;
  };


  export const recommendations = async (id) => {

    const movies = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
    );
  
    return  movies.data.results;
  };



  export const getMoviesByGenre = async (genreId) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=en-US`
    );
  
    return response.data.results;
  };