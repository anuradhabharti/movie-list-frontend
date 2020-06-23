import React, { Component } from 'react';
import propsType from 'prop-types'
import {connect} from "react-redux"
import {addMovieInWatchlist,removeMovieInWatchlist} from "../actions/movieAction"
import noImage from "../No_Image_Available.png";
class Movie extends Component {
    state = {isClicked:true,movie:"" }
    componentDidMount(){
        fetch(`/movies-app/movie/${this.props.match.params.id}`)
        .then(res=>res.json())
        .then(result=>this.setState({movie:result}))
        if(this.props.user){
        const isExist = this.props.watchlist.filter(movie=>movie.movie_id==this.props.match.params.id);
        console.log(isExist,"isee")
        this.setState({isAdded:isExist.length})}
        // this.setState({movie:this.props.movies.filter(movie=>movie.movie_id===Number(this.props.match.params.id))[0]})
    }
    addWatchlist =()=>{
      // this.setState({isClicked:false})
      this.props.addMovieInWatchlist(this.props.user.id,this.state.movie,this.props.token)
    }
    removeWatchlist=()=>{
      // this.setState({isClicked:true})
      this.props.removeMovieInWatchlist(this.props.user.id,this.state.movie)
    }
    render() { 
        console.log(this.props,"mov")
        return (<div className="moviepage-container p-4">
      {this.state.movie&&
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
    {this.props.token&&this.state.isAdded===0&&
    <button className="watchlist-btn-moviepage btn-success btn m-1"
     onClick={()=>this.addWatchlist()}
    >Add to my watchlist</button>}
    {this.state.isAdded===1&&
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
    {this.state.movie.description}
    </p>
    <label>Genres :
    {this.state.movie.genres&&this.state.movie.genres.map(genre=>
      <button type='button' className=" btn btn-warning btn-sm m-1" >{genre}</button>
      )}</label>
      <p>Release Date : {this.state.movie.release_date.split("-").reverse().join("/")}</p>
    </div>
    </div>
  </div>}
  <div className="row actor-container-moviepge m-3">
      <h2 className="actor-heading">Actor</h2>
      <div className="actor-moviepage"></div>
  </div>
  <div className="row m-3">
      <h2 className="gallary-heading">Gallery</h2>
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
    watchlist:state.movies.watchlist,
    user:state.user.user,
    token:state.user.token,
})

export default connect(mapStatetoProps,{addMovieInWatchlist,removeMovieInWatchlist})(Movie);