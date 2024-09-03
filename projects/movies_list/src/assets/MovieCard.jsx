import React from 'react';

// Component to display each movie's thumbnail and title
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.thumbnail} alt={movie.title} className="movie-image" />
      <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;
