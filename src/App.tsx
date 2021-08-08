import React, { useState, useEffect } from 'react';
import './App.css';
import ApiService from './services/api';
import { Movie } from './models/movie';
import CardsGrid from './components/CardsGrid/CardsGrid'; 

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
        <CardsGrid movies={movies}/>
    );
}
