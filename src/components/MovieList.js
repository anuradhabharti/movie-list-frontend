import React, { Component } from 'react';
import MovieCard from './MovieCard'
import propsType from 'prop-types'
import {connect} from "react-redux"
import{Link} from "react-router-dom"
import {fetchNowplayingMovies} from '../actions/movieAction'
class MovieList extends Component {
    state = {  }
    componentDidMount(){
       this.props.fetchNowplayingMovies()
    }
    render() { 
        // console.log(this.props,"movie")
        return ( <div className="container-fluid">
            <ul className="movie-list-navbar">
              <li>Popular</li>
              <li>Now playing</li>
              <li>Top rated</li>
            </ul>
            <div className="row row-cols-5 m-5 movie-list-container">
              {this.props.nowPlayingMovies.map((movie,index)=>
                    <MovieCard
                    key={movie.movie_id}
                    id={movie.movie_id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    releaseDate={movie.release_date}
                    posterPath={movie.poster_path}
                    />  
                )}
            </div>
            <div className="movie-list-footer">
               <button>1</button>
               <button>2</button>
               <button>3</button>
               <button>4</button>
               <button>...</button>
               <button>31</button>
            </div>
        </div> );
    }
}

MovieList.propsType=({
  fetchNowplayingMovies:propsType.func.isRequired,
  nowPlayingMovies:propsType.array.isRequired,
   
 })
 const mapStatetoProps=state=>({
     nowPlayingMovies:state.movies.nowPlayingMovies,
  
 })
 
 export default connect(mapStatetoProps,{fetchNowplayingMovies})(MovieList);