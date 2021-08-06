import { Movie} from '../../models/movie'

function MovieCard(props: {movie: Movie}) {

    function handleFavorite(movie: Movie) {
        alert(`${movie.title} adicionado aos favoritos!`);
    }
    
    return (
        <div onClick={() =>handleFavorite(props.movie)}>
            <img src={`${process.env.PUBLIC_URL}/assets/${props.movie.episode_id}.png`} alt="Movie thumb"/>
            <h1>{props.movie.title}</h1>
        </div>
    )
}

export default MovieCard
