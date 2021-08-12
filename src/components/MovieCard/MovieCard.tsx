import React, { useState } from 'react';
import {Movie} from '../../models/movie';
import './MovieCard.css';

function MovieCard(props: {movie: Movie}) {

    const [expanded, setExpanded] = useState(false);
    
    function toggleExpanded(movie: Movie) {
        setExpanded(!expanded);
        return expanded;
    }

    function formatDate(date: string) {
        const dias = [
            "Domingo",
            "Segunda-feira",
            "Terça-feira",
            "Quarta-feira",
            "Quinta--feira",
            "Sexta-feira",
            "Sábado"
        ];
        const meses = [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro"
        ];
        let dateISO = new Date(date);
        let formattedDate = (( dias[dateISO.getDay()] + ", " + dateISO.getDate() + " de " + meses[(dateISO.getMonth())] + " de " + dateISO.getFullYear()));
        return formattedDate;
    }
    
    return (
        <div data-testid='MovieCard' className={`MovieCard ${expanded? 'Expanded' : ''}`} onClick={() =>toggleExpanded(props.movie)}>
          <div className="ThumbWrapper">
            <img
              className="Thumb"
              src={`${process.env.PUBLIC_URL}/assets/${props.movie.episode_id}.png`} alt="Movie thumb"
            />
          </div>
          <h2 className="CardTitle">{props.movie.title}</h2>          
          <p className={`MovieDescription ${expanded? 'Visible' : ''}`}>{props.movie.opening_crawl}</p>
          <p className={`MovieDate ${expanded? 'Visible' : ''}`} >{formatDate(props.movie.edited)}</p>
          <div className="MoreInfoWrapper">
            <p className="MoreInfoText">{expanded? 'Less Info' : 'More Info'}</p>
            <p className="MoreInfoIcon">{expanded? '̭' : '̬'}    </p>
          </div>


        </div>
    );
}

export default MovieCard;
