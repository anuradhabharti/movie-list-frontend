import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"
import movieLogo from "../Movie-Studio-icon.png"
import {searchMovie} from '../actions/movieAction'
import {logOut} from '../actions/userAction'
class Header extends Component {
  state = {search:""};
  searchHandler(search,props){
    this.props.searchMovie(search,props)
    this.setState({search:""})
  }
  render() {
    return (
      <div className="App-header p-2">
        <div>
           <img className="movie-logo-img"src={movieLogo} alt="movie-icon"/>
        </div>
        <div style={{display:"flex"}}>
          <input
            className="form-control form-control-md ml-3"
            type="text"
            value={this.state.search}
            placeholder="Search by movie title"
            aria-label="Search by movie title"
            onChange={(e)=>this.setState({search:e.target.value})}
            // onClick={(e)=>e.target.value=''}
          />
          <Link to="/search"><button className="btn-search btn-default" 
          onClick={(e)=>this.searchHandler(this.state.search,this.props)}
           >Search</button></Link>
        </div>
        {this.props.isAuthenticated&&
        <ul className="header-navbar-watchlist">
           <Link to="/movies/now_playing/1">
            <li>Movie</li>
           </Link>
          <Link to="/watchlist">
            <li>Watchlist</li>
          </Link>
          <Link to="/movies/now_playing/1">
            <li onClick={this.props.logOut}>Logout</li>
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
export default connect(mapStatetoProps, {searchMovie,logOut})(Header);


