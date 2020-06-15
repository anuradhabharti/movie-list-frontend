import React, { Component } from 'react';
import MovieCard from './MovieCard'
import propsType from 'prop-types'
import {connect} from "react-redux"
import{Link} from "react-router-dom"
import {fetchNowplayingMovies,fetchPopularMovies,fetchUpcomingMovies} from '../actions/movieAction'
class MovieList extends Component {
    state = {show:"nowplaying",page:1 }
    componentDidMount(){
       this.props.fetchNowplayingMovies(this.props.match.params.movie_type,this.props.match.params.page)
    }
    // componentDidUpdate(){
    //     if(this.props.match.params.movie_type==="popular")
    //     this.props.fetchNowplayingMovies(this.props.match.params.movie_type,this.props.match.params.page)
    // }
    givePopularMovies(){
        this.props.fetchNowplayingMovies("popular","1") 
    }
    giveUpcomingMovies(){
        this.props.fetchNowplayingMovies("upcoming","1")
    }
    giveNowPlayingMovies(){
        this.props.fetchNowplayingMovies("now_playing","1") 
    }
    render() { 
        console.log(this.props,this.props.match.params.page,"movie")
        return ( <div className="container-fluid">
            <div className="movie-list-navbar">
            <Link to="/movies/now_playing/1"><button className={`movie-nav-btn `} onClick={()=>this.giveNowPlayingMovies()}checked="true">Now playing</button></Link>
            <Link to="/movies/upcoming/1"> <button className={`movie-nav-btn `}  onClick={()=>this.giveUpcomingMovies()}>Upcoming</button></Link>
            <Link to="/movies/popular/1">  <button className={`movie-nav-btn `} onClick={()=>this.givePopularMovies()}>Popular</button></Link>
            </div>
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
                    {/* {this.state.page===2&&this.state.show==="nowplaying"&&this.props.nowPlayingMovies.slice(20,40).map((movie,index)=>
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
                
                 {this.state.show==="popular"&&this.props.popularMovies.map((movie,index)=>
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
                 {this.state.show==="upcoming"&&this.props.upcomingMovies.map((movie,index)=>
                    <MovieCard
                    key={movie.movie_id}
                    id={movie.movie_id}
                    title={movie.title}
                    description={movie.description}
                    rating={movie.rating}
                    releaseDate={movie.release_date}
                    posterPath={movie.poster_path}
                    />  
                )} */}
            </div>
            <div className="movie-list-footer">
               <button className="page-btn btn btn-lg p-3" onClick={()=>this.setState({page:1})}>1</button>
               <button className="page-btn btn p-3" onClick={()=>this.setState({page:2})}>2</button>
               <button className="page-btn btn p-3"onClick={()=>this.setState({page:3})}>3</button>
               <button className="page-btn btn p-3"onClick={()=>this.setState({page:4})}>4</button>
               <button className="page-btn btn p-3"onClick={()=>this.setState({page:5})}>5</button>
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
     popularMovies:state.movies.popularMovies,
     upcomingMovies:state.movies.upcomingMovies,
  
 })
 
 export default connect(mapStatetoProps,{fetchNowplayingMovies,fetchUpcomingMovies,fetchPopularMovies})(MovieList);