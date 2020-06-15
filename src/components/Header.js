import React, { Component } from "react";
import { Link } from "react-router-dom";
import movieLogo from "../Movie-Studio-icon.png"
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="App-header p-2">
        <div>
           <img className="movie-logo-img"src={movieLogo} alt="movie-icon"/>
        </div>
        <div>
          <input
            className="form-control form-control-md ml-3 "
            type="text"
            placeholder="Search by movie title"
            aria-label="Search by movie title"
          />
        </div>

        <ul className="header-navbar">
          {/* <Link to="/watchlist">
            <li>watchlist</li>
          </Link> */}
          <Link to="/movies/now_playing/1">
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
