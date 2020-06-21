import React, { Component } from 'react';
import {connect} from 'react-redux'
import MovieCard from './MovieCard'
class SearchMovies extends Component {
    state = {  }
    render() { 
        return (<div>
            <h2>Search Movies...</h2>
            {this.props.searchMovies.map(movie=>
                <MovieCard
                    key={movie.movie_id}
                    id={movie.movie_id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    releaseDate={movie.release_date}
                    posterPath={movie.poster_path}
                    /> )}
        </div>  );
    }
}
 
const mapStatetoProps=state=>({
     searchMovies:state.movies.search,
  
 })
 
 export default connect(mapStatetoProps)(SearchMovies);