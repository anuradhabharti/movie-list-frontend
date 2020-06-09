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
        return ( <div>
            <ul className="movie-list-navbar">
              <li>Popular</li>
              <li>Now playing</li>
              <li>Top rated</li>
            </ul>
            <div className="movie-list-container">
              <MovieCard/>  
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
   
 })
 const mapStatetoProps=state=>({
     nowPlayingMovies:state.movies.nowPlayingMovies,
  
 })
 
 export default connect(mapStatetoProps,{fetchNowplayingMovies})(MovieList);