import React, { Component } from "react";
import {Link} from "react-router-dom"
import noImage from "../No_Image_Available.png";
function MovieCard(props) {
  return (
    <Link to={`/movie/${props.id}`}><div className="col movie-card p-2">
      {!props.posterPath && (
        <img className="movie-poster" src={noImage} alt={props.title} />
      )}
      {props.posterPath && (
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/w300/${props.posterPath}`}
          alt={props.title}
        />
      )}
      <div className="movie-card-footer">
        <div className="release-title-box ml-0">
          <p className="title ml-0.">{props.title}</p>
          <p className="release-date small mb-0">
            {props.releaseDate.split("-").reverse().join("/")}
          </p>
        </div>
        {props.rating > 0 && (
          <button type="button" className="btn btn-secondary btn-sm rating-btn">
            {props.rating}
          </button>
        )}
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;
