import {Movie} from '../../models/movie'
import MovieCard from '../MovieCard/MovieCard'
import './CardsGrid.css'

function CardsGrid(props: {movies: Movie[]}) {

return (
<div className="CardsGrid">
    {props.movies.map(movie => (
    <MovieCard key={movie.episode_id} movie={movie}/>
    ))}
</div>
);
}

export default CardsGrid;
