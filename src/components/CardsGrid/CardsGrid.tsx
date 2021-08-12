import React, { useState, useEffect } from 'react';
import {Movie} from '../../models/movie';
import {Char} from '../../models/char';
import MovieCard from '../MovieCard/MovieCard';
import './CardsGrid.css';

function CardsGrid(props: {movies: Movie[], char: Char}) {

    const [lukeMovies, setLukeMovies] = useState<string[]>([]);
    
    useEffect(() => {
        const getLukeMovies = () => {
            const test = [];
            for (let movie of props.movies) {
                if(props.char.films.includes(movie.url)) {
                    test.push(movie.title);
                }
            }
            setLukeMovies(test);
        };            
        getLukeMovies();
    }, []);

    return (
        <>
          <div className="CardsGrid">
            {props.movies.map(movie => (
                <MovieCard key={movie.episode_id} movie={movie}/>
            ))}

            <div className="CharCard">
              <h3 className="CharTitle">{props.char.name}</h3>
              <ul>{lukeMovies.map((movie, index) => (
                  <li key={index}>
                    {movie}
                  </li>
              ))}
              </ul>
            </div>

          </div>          
        </>
    );
}

export default CardsGrid;
