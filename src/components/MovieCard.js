import React, { Component } from 'react';
function MovieCard(props) { 
    return (
        <div className="col movie-card p-2">
           <img className="movie-poster"src={`https://image.tmdb.org/t/p/w300/${props.posterPath}`} alt={props.title}/>
           <div class="movie-card-footer">
               <div>
               <p className='title mb-1 mr-4'>{props.title}</p>
               <p className='release-date small mb-0'>{props.releaseDate.split("-").reverse().join("/")}</p>
               </div>
               
               <button type="button" className="btn btn-secondary btn-sm rating-btn">{props.rating}</button>
    
           </div>
        </div>
    );
  }
   
  export default MovieCard;