import React, { Component } from 'react';
import propsType from 'prop-types'
import {connect} from "react-redux"
import noImage from "../No_Image_Available.png";
class Movie extends Component {
    state = {  }
    componentWillMount(){
        this.setState(this.props.movies.filter(movie=>movie.movie_id===Number(this.props.match.params.id))[0])
    }
    render() { 
        console.log(this.state)
        return (<div className="moviepage-container p-4">
     <div className="row movie-content-moviepage">
    <div className="col-4">
    {this.state.poster_path && (
        <img
          className="movie-poster-on-moviepage"
          src={`https://image.tmdb.org/t/p/w300/${this.state.poster_path}`}
          alt={this.state.title}
        />
      )}
      {!this.state.poster_path&&
         <img 
           className="movie-poster-on-moviepage"
           src={noImage}
           alt={this.state.title}/>
      }
    </div>
    <div className="col-8 description-moviepage">
    <div className="title-watchlist-moviepage">
    <div>
    <h2 className="title-moviepage">{this.state.title}</h2> 
    <button className="watchlist-btn-moviepage btn-success btn m-1">Add to my watchlist</button>
    </div>
    {this.state.rating>0&&
    <button className="rating-moviepage">{this.state.rating}</button>
    }
    </div>
    <div className="description-genre-moviepage">
    <p>
    {this.state.description}
    </p>
      <label>Genres : {"romance"}</label>
      <p>release_date : {this.state.release_date}</p>
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
 
const mapStatetoProps=state=>({
    movies:state.movies.movies,
 
})

export default connect(mapStatetoProps)(Movie);