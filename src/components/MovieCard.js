import React, { Component } from "react";
import {Link} from "react-router-dom"
import noImage from "../No_Image_Available.png";
function MovieCard(props) {
  return (
  <div className="col movie-card p-2">
        <Link to={`/movie/${props.id}`}>
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
      </Link>
      <div className="movie-card-footer">
        <div className="release-title-box">
        <Link to={`/movie/${props.id}`}>
          <p className="title">{props.title}</p>
          </Link>
          <p className="release-date small">
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

  );
}

export default MovieCard;
