import {FETCH_MOVIES,FETCH_WATCHLIST,ADD_MOVIE,REMOVE_MOVIE} from './types';

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
export const fetchwatchlistMovies= (id,token) => (dispatch) => {
  console.log("fetch topten")
  fetch(`/movies-app/watchlist/${id}`,
      { 
         method:"GET",
         headers:{'auth-token':token}
      }
      )
    .then(res=>res.json())
    .then(movie=>dispatch({
         type:FETCH_WATCHLIST,
         payload:movie
    })) 
    .catch(err=>console.log(err,"err of fetch watchist"))
}
export const addMovieInWatchlist= (userId,movie)=>(dispatch)=>{  
  const ids={"id":userId,"movie_id":movie.movie_id}
  fetch('/movies-app/watchlist/add_movie',
  {
      method:"POST",
      headers:{
          "Accept":"application/json",
          "Content-type":"application/json", 
      },
      body:JSON.stringify(ids)
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(movie)
    return dispatch({
    type:ADD_MOVIE,
    payload:movie
  })})
  .catch(err=>err)
}
export const removeMovieInWatchlist= (userId,movie)=>(dispatch)=>{  
  const ids={"id":userId,"movie_id":movie.movie_id}
  fetch('/movies-app/watchlist/remove_movie',
  {
      method:"POST",
      headers:{
          "Accept":"application/json",
          "Content-type":"application/json", 
      },
      body:JSON.stringify(ids)
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(movie,"remove")
    return dispatch({
    type:REMOVE_MOVIE,
    payload:movie
  })})
  .catch(err=>err)
}
