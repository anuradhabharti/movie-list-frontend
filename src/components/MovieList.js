import React, { Component } from 'react';
import MovieCard from './MovieCard'
class MovieList extends Component {
    state = {  }
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

            </div>
        </div> );
    }
}
 
export default MovieList;