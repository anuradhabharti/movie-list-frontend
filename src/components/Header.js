import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
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
        {this.props.isAuthenticated&&
        <ul className="header-navbar">
          <Link to="/watchlist">
            <li>Watchlist</li>
          </Link>
          <Link to="/signout">
            <li>Logout</li>
          </Link>
          </ul>}
          {!this.props.isAuthenticated&&
          <ul className="header-navbar">
          <Link to="/movies/now_playing/1">
            <li>Movie</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>}
      </div>
    );
  }
}
const mapStatetoProps=state=>({
  isAuthenticated:!!state.user.token,

})
export default connect(mapStatetoProps)(Header);


