import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './services/api';
import { Movie } from './models/movie';
import MovieCard from './components/MovieCard/MovieCard'; 

export default function App() {

    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        const api = new ApiService();
        const getMovies = async () => {
            try {
                const response = await api.getMovies();
                setMovies(response);
            } catch(err) {
                console.log(err);
            }
        }
        getMovies();
    }, []);
    
    return (
        <>
            {movies.map(movie => (
                <MovieCard key={movie.episode_id} movie={movie}/>
            ))}
        </>
    );
}
