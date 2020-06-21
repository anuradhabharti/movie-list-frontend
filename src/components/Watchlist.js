import React, { Component } from 'react';
import propsType from 'prop-types'
import {connect} from "react-redux"
import {fetchwatchlistMovies} from "../actions/movieAction"
import MovieCard from './MovieCard'
class Watchlist extends Component {
    state = {  }
    componentDidMount(){
        this.props.fetchwatchlistMovies(this.props.user.id,this.props.token)
    }
    render() { 
        return (<div>
            <h3 className="my-watchlist-title">My Watchlist Movies</h3>
            {
                this.props.watchlist.map(movie=> 
                 <MovieCard
                    key={movie.movie_id}
                    id={movie.movie_id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    releaseDate={movie.release_date}
                    posterPath={movie.poster_path}
                    /> )
            }
        </div>  );
    }
}
Watchlist.propsType=({
    fetchwatchlistMovies:propsType.func.isRequired,
    user:propsType.string.isRequired,
     
   })
   const mapStatetoProps=state=>({
       user:state.user.user,
       token:state.user.token,
       watchlist:state.movies.watchlist
   })
   
export default connect(mapStatetoProps,{fetchwatchlistMovies})(Watchlist);
