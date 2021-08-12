import React, { useState, useEffect } from 'react';
import {getMovies, getChar} from '../../services/api';
import {Movie} from '../../models/movie';
import {Char} from '../../models/char';
import CardsGrid from '../../components/CardsGrid/CardsGrid'; 
import './Home.css';

function Home() {    

    const [luke, setLukeInfo] = useState<Char>();
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // get Movies from API when page is created
    useEffect(() => {
        const getMoviesList = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await getMovies();
                const char_response = await getChar("https://swapi.dev/api/people/1");
                setLukeInfo(char_response);
                setMovies(response);
                setLoading(false);
            } catch(err) {
                setError(true);
            }
        };
        getMoviesList();
    }, []);

    return (
    <>
        <h1>Star Wars Movie List</h1>
        <p className="Tooltip">Click on the movie titles to know a little more about them!</p>
        {error  && <h2>An error occured, please refresh the page.</h2>}
        {!error && loading && <h2>Fetching movies from the dark side...</h2>}
      {!error && !loading && <CardsGrid movies={movies} char={luke}/>}
    </>
    );
}

export default Home;
