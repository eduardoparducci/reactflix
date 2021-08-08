import React, { useState, useEffect } from 'react';
import ApiService from '../../services/api';
import {Movie} from '../../models/movie';
import CardsGrid from '../../components/CardsGrid/CardsGrid'; 
import './Home.css';

function Home() {    

    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    
    // get Movies from API when page is created
    useEffect(() => {
        const api = new ApiService();
        const getMovies = async () => {
            try {
                setError(false);
                setLoading(true);
                const response = await api.getMovies();
                setMovies(response);
                setLoading(false);
            } catch(err) {
                setError(true);
                console.log(err);
            }
        };
        getMovies();
    }, []);

    return (
        <>
          <h1>Star Wars Movie List</h1>
          {error  && <h2>An error occured, please refresh the page.</h2>}
          {!error && loading && <h2>Fetching movies from the dark side...</h2>}
          {!error && !loading && <CardsGrid movies={movies}/>}
        </>
    );
}

export default Home;
