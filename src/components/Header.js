import React, { Component } from 'react';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="App-header">
              <p>movie header</p>
              <textarea>movie search bar</textarea>
              <ul className="header-navbar">
                  <li>movie</li>
                  <li>login</li>
              </ul>
            </div>
         );
    }
}
 
export default Header;