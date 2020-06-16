import { FETCH_TOKEN,FETCH_MOVIES, FETCH_USER
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

export const loginUser= (user)=>(dispatch)=>{  
  fetch('/movies-app/login',
  {
      method:"POST",
      headers:{
          "Accept":"application/json",
          "Content-type":"application/json", 
      },
      body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result,"res")
    return dispatch({
    type:FETCH_TOKEN,
    payload:result
  })})
  .catch(err=>err)
}

export const registerUser= (user)=>(dispatch)=>{  
  fetch('/movies-app/register',
  {
      method:"POST",
      headers:{
          "Accept":"application/json",
          "Content-type":"application/json", 
      },
      body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(result=>{
    console.log(result,"res")
    return dispatch({
    type:FETCH_USER,
    payload:result
  })})
  .catch(err=>err)
}