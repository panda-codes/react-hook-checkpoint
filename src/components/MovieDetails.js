
// MovieDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, description, trailerURL } = movie;

  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="video-container">
        <iframe width="560" height="315" src={trailerURL} title="movie-trailer" frameborder="0" allowfullscreen></iframe>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDetail;
