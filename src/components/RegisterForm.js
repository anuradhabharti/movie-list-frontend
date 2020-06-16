import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import propsType from 'prop-types'
import {connect} from "react-redux"
import {registerUser} from "../actions/movieAction"

// import {registerUser} from "../assets/assets"
class RegisterForm extends Component {
    state = { 
        
     }
    // registerUser (){
    //     console.log(this.state)
        
    //     fetch('/movies-app/register',
    //     {
    //         method:"POST",
    //         headers:{
    //             "Accept":"application/json",
    //             "Content-type":"application/json",
              
    //         },
    //         body:JSON.stringify(this.state)
    //     })
    //     .then(res=>res.json())
    //     .then(result=>console.log(result))
    //     .catch(err=>err)
    // }
    render() { 
        return ( 
            <div className="login-form">
                <h3 className="login-title mx-auto">Create account</h3>
              {/* <form className='register-form'> */}
              <div className="form-group m-4">
                  <label for='name'>Name</label>
                  <input  className="form-control" 
                        placeholder='Enter Name'
                        name='name'
                        type='name'
                        onChange={(e)=>this.setState({name:e.target.value})}></input>
              </div> 
              <div className="form-group m-4">
                  <label for='email'>Email</label>
                  <input  className="form-control"
                   placeholder='Enter email'
                    name='email' 
                    type='email'
                    onChange={(e)=>this.setState({email:e.target.value})}
                    ></input>
              </div>
              <div className="form-group m-4">
                  <label  for='password'>Password</label>
                  <input className="form-control"
                  placeholder='Enter password' 
                  name='password'
                   type='password'
                   onChange={(e)=>this.setState({password:e.target.value})}
                   ></input>
              </div>
              <div className="form-group m-4">
              <button className="btn-round btn btn-danger btn-block" onClick={()=>this.props.registerUser(this.state)}>CREATE ACCOUNT</button>
              </div>
             
              {/* </form> */}
              <p>Already User?
                  <Link to='/login'><span> Login</span></Link></p>
            </div>
         );
    }
}
RegisterForm.propsType=({
    registerUser:propsType.func.isRequired,
    user:propsType.object.isRequired,
     
   })
   const mapStatetoProps=state=>({
       user:state.movies.user,
    
   })
   
export default connect(mapStatetoProps,{registerUser})(RegisterForm);
 
