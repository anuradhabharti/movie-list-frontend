import { FETCH_NOWPLAYING,FETCH_POPULAR, FETCH_UPCOMING,FETCH_MOVIES
    } from './types';

export const fetchMovies= (movie_type,page) => (dispatch) => {
  console.log("fetch topten")
  fetch(`/movies-app/movies/${movie_type}/${page}`,
      { 
         method:"GET"
      })
    .then(res=>res.json())
    .then(movie=>dispatch({
         type:FETCH_MOVIES,
         payload:movie
    })) 
    .catch(err=>console.log(err,"err of fetch now playing"))
};
