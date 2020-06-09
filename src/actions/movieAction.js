import { FETCH_NOWPLAYING,
    } from './types';
// import {api} from '../assets/credentials';

export const fetchNowplayingMovies= () => (dispatch) => {
  console.log("fetch topten")
  fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=46cb0826bc9d924445bc90903e183ebf&language=en-US&page=2")
      .then(res=>res.json())
      .then(movie=>dispatch({
         type: FETCH_NOWPLAYING,
         payload: movie.results,
    })) 
};