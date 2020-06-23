import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import propsType from 'prop-types'
import {connect} from "react-redux"
import {loginUser} from "../actions/userAction"
import {fetchwatchlistMovies} from '../actions/movieAction'
class LoginForm extends Component {
    state = {  }
    render() { 
        console.log(this.state,"login")
        return ( 
            <div className="login-form">
                <h3 className="login-title mx-auto">Login</h3>
              <div className='register-form'>
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
              </div>
              <div className="form-group m-4">
              <button className="btn-round btn btn-danger btn-block"
                 onClick={()=>this.props.loginUser(this.state,this.props)}
                 >
                 LOGIN
              </button>
              </div>
              <p>Not an User?
                  <Link to='/register'><span> Create Account</span></Link></p>
            </div>
         );
    }
}
 
LoginForm.propsType=({
    loginUser:propsType.func.isRequired,
    token:propsType.string.isRequired,
     
   })
   const mapStatetoProps=state=>({
       token:state.user.token,
    
   })
   
export default connect(mapStatetoProps,{loginUser,fetchwatchlistMovies})(LoginForm);
