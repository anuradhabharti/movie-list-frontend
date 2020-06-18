import { FETCH_TOKEN, FETCH_USER} from './types';
export const loginUser= (user,props)=>(dispatch)=>{  
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
      props.history.push("/movies/now_playing/1")
      return dispatch({
      type:FETCH_TOKEN,
      payload:result
    })})
    .catch(err=>err)
  }
  
  export const registerUser= (user,props)=>(dispatch)=>{  
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
       props.history.push("/login")
      return dispatch({
      type:FETCH_USER,
      payload:result
    })})
    .catch(err=>err)
  }