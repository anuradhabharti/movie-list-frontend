import React, { Component } from 'react';
import MovieCard from './MovieCard'
import propsType from 'prop-types'
import {connect} from "react-redux"
import{Link} from "react-router-dom"
import {fetchMovies} from '../actions/movieAction'
class MovieList extends Component {
    state = {border:"",page:1 }
    componentDidMount(){
       this.props.fetchMovies(this.props.match.params.movie_type,this.props.match.params.page)
    }
    givePopularMovies(){
        this.props.fetchMovies("popular","1") 
    }
    giveUpcomingMovies(){
        this.props.fetchMovies("upcoming","1")
    }
    giveNowPlayingMovies(){
        this.props.fetchMovies("now_playing","1") 
    }
    giveMoviesOfParticularPage(page){
        this.props.fetchMovies(this.props.match.params.movie_type,page)
    }
    render() { 
        console.log(this.props,this.props.match.params.page,"movie")
        return ( <div className="container-fluid">
            <div className="movie-list-navbar">
            <Link to="/movies/now_playing/1"><button className={`movie-nav-btn now-playing-btn`}  onClick={()=>this.giveNowPlayingMovies()}checked="true">Now playing</button></Link>
            <Link to="/movies/upcoming/1"> <button className={`movie-nav-btn `}  onClick={()=>this.giveUpcomingMovies()}>Upcoming</button></Link>
            <Link to="/movies/popular/1">  <button className={`movie-nav-btn `} onClick={()=>this.givePopularMovies()}>Popular</button></Link>
            </div>
            <div className="row row-cols-5 m-5 movie-list-container">
              {this.props.movies.map((movie,index)=>
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
               <button className="page-btn btn " onClick={()=>this.giveMoviesOfParticularPage(1)}>1</button>
               <button className="page-btn btn " onClick={()=>this.giveMoviesOfParticularPage(2)}>2</button>
               <button className="page-btn btn "onClick={()=>this.giveMoviesOfParticularPage(3)}>3</button>
               <button className="page-btn btn "onClick={()=>this.giveMoviesOfParticularPage(4)}>4</button>
               <button className="page-btn btn "onClick={()=>this.giveMoviesOfParticularPage(5)}>5</button>
            </div>
        </div> );
    }
}

MovieList.propsType=({
  fetchMovies:propsType.func.isRequired,
  nowPlayingMovies:propsType.array.isRequired,
   
 })
 const mapStatetoProps=state=>({
     movies:state.movies.movies,
  
 })
 
 export default connect(mapStatetoProps,{fetchMovies})(MovieList);