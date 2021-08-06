import { Movie} from '../../models/movie'

function MovieCard(props: {movie: Movie}) {

    function handleFavorite(movie: Movie) {
        alert(`${movie.title} adicionado aos favoritos!`);        
    }

    return (
        <header>
            <button onClick={() =>handleFavorite(props.movie)}>{props.movie.title}</button>
        </header>
    )
}

export default MovieCard
