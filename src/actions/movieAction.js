import { FETCH_NOWPLAYING,FETCH_POPULAR, FETCH_UPCOMING,
    } from './types';
// import {api} from '../assets/credentials';

export const fetchNowplayingMovies= (movie_type,page) => (dispatch) => {
  console.log("fetch topten")
  fetch(`/movies-app/movies/${movie_type}/${page}`,
      { 
         method:"GET"
      })
    .then(res=>res.json())
    .then(movie=>dispatch({
         type:FETCH_NOWPLAYING,
         payload:movie
    })) 
    .catch(err=>console.log(err,"err of fetch now playing"))
};

export const fetchUpcomingMovies= (page) => (dispatch) => {
  console.log("fetch topten")
  fetch(`/movies-app/movies/upcoming/${page}`,
      { 
         method:"GET"
      })
    .then(res=>res.json())
    .then(movie=>dispatch({
         type:FETCH_UPCOMING,
         payload:movie
    })) 
    .catch(err=>console.log(err,"err of fetch now playing"))
};

export const fetchPopularMovies= () => (dispatch) => {
  console.log("fetch topten")
  fetch("/movies-app/movies/popular",
      { 
         method:"GET"
      })
    .then(res=>res.json())
    .then(movie=>dispatch({
         type:FETCH_POPULAR,
         payload:movie
    })) 
    .catch(err=>console.log(err,"err of fetch now playing"))
};