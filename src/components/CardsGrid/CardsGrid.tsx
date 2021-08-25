import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import CharCard from '../CharCard/CharCard';
import './CardsGrid.css';

function CardsGrid(props: {entity: any}) {

    if (props.entity[0].title) {
        return (
            <div className="CardsGrid">
              {props.entity.map(movie => (
                  <MovieCard key={movie.episode_id} movie={movie}/>
              ))}
            </div>          
        );
     }
    else {
        return (
            <div className="CardsGrid">
              {props.entity.map( (char, index) => (
                  <CharCard key={index} char={char}/>
              ))}
            </div>          
        );
    }
}

export default CardsGrid;
