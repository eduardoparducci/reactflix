import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './services/api';
import { Movie } from './models/movie';

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

    function handleFavorite(movie: Movie) {
        alert(`${movie.title} adicionado aos favoritos!`);        
    }
    
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.episode_id}>
                    {movie.title}
                    <button onClick={() => handleFavorite(movie)}>Adicionar aos favoritos</button>
                </li>))}
        </ul>
    );
}
