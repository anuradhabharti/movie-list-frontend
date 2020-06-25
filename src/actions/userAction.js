import { FETCH_TOKEN, FETCH_USER,LOGOUT_USER} from './types';

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
      if(result.token)
      {  alert("Successfull logged")
        props.fetchwatchlistMovies(result.user.id,result.token)
      
      return dispatch({
      type:FETCH_TOKEN,
      payload:result
    })}
    else {
      alert(result);
      return;
    }
  })
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
      if(result.id){
        alert("Account created successfull! Please login")
        props.history.push("/login")
      return dispatch({
      type:FETCH_USER,
      payload:result
    })}
    else if(result==={}){
      alert("Try again")
      return;
    }
    else{
      alert(result);
      return;
    }
  })
    .catch(err=>err)
  }

  export const logOut=()=>(dispatch)=>{
    return dispatch({
      type:LOGOUT_USER,
      payload:{}
    })
  }