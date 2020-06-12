import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class RegisterForm extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="login-form">
                <h3 className="login-title mx-auto">Create account</h3>
              <form className='register-form'>
              <div className="form-group m-4">
                  <label for='name'>Name</label>
                  <input  className="form-control" placeholder='Enter Name' name='name' type='name'></input>
              </div> 
              <div className="form-group m-4">
                  <label for='email'>Email</label>
                  <input  className="form-control" placeholder='Enter email' name='email' type='email'></input>
              </div>
              <div className="form-group m-4">
                  <label  for='password'>Password</label>
                  <input className="form-control"placeholder='Enter password' name='password' type='password'></input>
              </div>
              <div className="form-group m-4">
              <button className="btn-round btn btn-danger btn-block">CREATE ACCOUNT</button>
              </div>
             
              </form>
              <p>Already user?
                  <Link to='/login'><span>login</span></Link></p>
            </div>
         );
    }
}
 
export default RegisterForm;