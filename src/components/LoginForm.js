import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class LoginForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login-form">
                <h3 className="login-title mx-auto">Login</h3>
              <form className='register-form'>
              <div className="form-group m-4">
                  <label for='email'>Email</label>
                  <input  className="form-control" placeholder='Enter email' name='email' type='email'></input>
              </div>
              <div className="form-group m-4">
                  <label  for='password'>Password</label>
                  <input className="form-control"placeholder='Enter password' name='password' type='password'></input>
              </div>
              <div className="form-group m-4">
              <button className="btn-round btn btn-danger btn-block">LOGIN</button>
              </div>
             
              </form>
              <p>Not an User?
                  <Link to='/register'><span> Create account</span></Link></p>
            </div>
         );
    }
}
 
export default LoginForm;