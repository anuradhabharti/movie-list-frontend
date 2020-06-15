 export const registerUser = (userDetail)=>{
    fetch('/movies-app/register',
    {
        method:"POST",
        headers:{
            "Accept":"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify(userDetail)
    })
    .then(res=>res.json())
    .then(result=>console.log(result))
    .catch(err=>err)
}