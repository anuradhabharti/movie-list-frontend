import React, { Component } from 'react';
import{Link} from "react-router-dom"
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-header">
              <p>movie header</p>
              <textarea>movie search bar</textarea>
              <ul className="header-navbar">
                  <Link to='/movies'><li>movie</li></Link>
                  <Link to='/login'><li>login</li></Link>
              </ul>
            </div>
         );
    }
}
 
export default Header;