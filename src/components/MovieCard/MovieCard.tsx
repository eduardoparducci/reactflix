import React, { useState } from 'react';
import {Movie} from '../../models/movie';
import './MovieCard.css';

function MovieCard(props: {movie: Movie}) {

    const [favorite, setFavorite] = useState(false);
    
    function toggleFavorite(movie: Movie) {
        if(!favorite) {
            alert(`${movie.title} added to favorites :)`);
        } else {
            alert(`${movie.title} removed from favorites :(`);
        }
        setFavorite(!favorite);
        return favorite;
    }
    
    return (
        <div data-testid='MovieCard' className={`MovieCard ${favorite? 'Favorite' : ''}`} onClick={() =>toggleFavorite(props.movie)}>
          <div className="ThumbWrapper">
            <img
              className="Thumb"
              src={`${process.env.PUBLIC_URL}/assets/${props.movie.episode_id}.png`} alt="Movie thumb"
            />
          </div>
          <h2 className="CardTitle">{props.movie.title}</h2>
        </div>
    );
}

export default MovieCard;
