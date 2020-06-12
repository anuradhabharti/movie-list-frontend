import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="App-header p-3">
        <p>movie header</p>

        <div>
          <input
            className="form-control form-control-md ml-3 "
            type="text"
            placeholder="Search by movie title"
            aria-label="Search by movie title"
          />
          <i className="fas fa-search"></i>
        </div>

        <ul className="header-navbar">
          <Link to="/movies">
            <li>movie</li>
          </Link>
          <Link to="/login">
            <li>login</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Header;
