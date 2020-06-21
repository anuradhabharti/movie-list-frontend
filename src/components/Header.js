import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import movieLogo from "../Movie-Studio-icon.png"
import {searchMovie,eraseSearch} from '../actions/movieAction'
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
            onChange={(e)=>this.props.searchMovie(e.target.value,this.props)}
            onClick={(e)=>e.target.value=''}
          />
        </div>
        {this.props.isAuthenticated&&
        <ul className="header-navbar-watchlist">
           <Link to="/movies/now_playing/1">
            <li onClick={()=>this.props.eraseSearch()}>Movie</li>
           </Link>
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
            <li onClick={()=> window.location.reload(false)}>Movie</li>
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
export default connect(mapStatetoProps, {searchMovie,eraseSearch})(Header);


