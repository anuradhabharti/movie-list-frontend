import { FETCH_NOWPLAYING,
    } from './types';
// import {api} from '../assets/credentials';

export const fetchNowplayingMovies= () => (dispatch) => {
  console.log("fetch topten")
  fetch("/movies-app/movies",
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