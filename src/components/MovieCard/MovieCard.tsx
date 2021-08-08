import {Movie} from '../../models/movie'
import './MovieCard.css'

function MovieCard(props: {movie: Movie}) {

    function handleFavorite(movie: Movie) {
        alert(`${movie.title} adicionado aos favoritos!`);
    }
    
    return (
        <div className="MovieCard" onClick={() =>handleFavorite(props.movie)}>
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
