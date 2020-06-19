import React, { Component } from 'react';
import propsType from 'prop-types'
import {connect} from "react-redux"
import {addMovieInWatchlist,removeMovieInWatchlist} from "../actions/movieAction"
import noImage from "../No_Image_Available.png";
class Movie extends Component {
    state = {watchlist:true  }
    componentWillMount(){
        this.setState({movie:this.props.movies.filter(movie=>movie.movie_id===Number(this.props.match.params.id))[0]})
    }
    addWatchlist =()=>{
      this.setState({watchlist:false})
      this.props.addMovieInWatchlist(this.props.user.id,this.state.movie)
    }
    removeWatchlist=()=>{
      this.setState({watchlist:true})
      this.props.removeMovieInWatchlist(this.props.user.id,this.state.movie)
    }
    render() { 
        console.log(this.state)
        return (<div className="moviepage-container p-4">
     <div className="row movie-content-moviepage">
    <div className="col-4">
    {this.state.movie.poster_path && (
        <img
          className="movie-poster-on-moviepage"
          src={`https://image.tmdb.org/t/p/w300/${this.state.movie.poster_path}`}
          alt={this.state.movie.title}
        />
      )}
      {!this.state.movie.poster_path&&
         <img 
           className="movie-poster-on-moviepage"
           src={noImage}
           alt={this.state.movie.title}/>
      }
    </div>
    <div className="col-8 description-moviepage">
    <div className="title-watchlist-moviepage">
    <div>
    <h2 className="title-moviepage">{this.state.movie.title}</h2> 
    {this.state.watchlist&&
    <button className="watchlist-btn-moviepage btn-success btn m-1"
     onClick={()=>this.addWatchlist()}
    >Add to my watchlist</button>}
    {!this.state.watchlist&&
    <button className="watchlist-btn-moviepage btn-success btn m-1"
     onClick={()=>this.removeWatchlist()}
    >Remove to my watchlist</button>}
    </div>
    {this.state.movie.rating>0&&
    <button className="rating-moviepage">{this.state.movie.rating}</button>
    }
    </div>
    <div className="description-genre-moviepage">
    <p>
    {this.state.description}
    </p>
      <label>Genres : {"romance"}</label>
      <p>release_date : {this.state.movie.release_date}</p>
    </div>
    </div>
  </div>
  <div className="row actor-container-moviepge m-3">
      <h2 className="actor-heading">Actor</h2>
      <div className="actor-moviepage"></div>
  </div>
  <div className="row m-3">
      <h2 className="gallary-heading">Gallary</h2>
      <div className="gallary-moviepage" style={{height:560}}></div>
  </div>
        </div>  );
    }
}
Movie.propsType=({
  addMovieInWatchlist:propsType.func.isRequired,
  user:propsType.object.isRequired,
  movie:propsType.array.isRequired,
 })

const mapStatetoProps=state=>({
    movies:state.movies.movies,
    user:state.user.user
})

export default connect(mapStatetoProps,{addMovieInWatchlist,removeMovieInWatchlist})(Movie);