// MovieCard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { title, description, posterURL, rating, trailerURL } = movie;

  return (
    <div className="movie-card">
      <Link to={trailerURL}>
        <img src={posterURL} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        {/* <a href={trailerURL}>{trailerURL}</a> */}
      </Link>
    </div>
  );
};

export default MovieCard;