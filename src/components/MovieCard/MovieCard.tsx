import React, { useState } from 'react';
import {Movie} from '../../models/movie';
import './MovieCard.css';
import { useHistory } from 'react-router-dom';

function MovieCard(props: {movie: Movie}) {

    const history = useHistory();
    const [expanded, setExpanded] = useState(false);
    
    function toggleExpanded(movie: Movie) {
        setExpanded(!expanded);
        return expanded;
    }

    function formatDate(date: string) {
        const week_days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        const months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ];
        let dateISO = new Date(date);
        let formattedDate = (( week_days[dateISO.getDay()] + ", " + dateISO.getDate() + " of " + months[(dateISO.getMonth())] + " of " + dateISO.getFullYear()));
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
          <div className={`ExpandedWrapper ${expanded? 'Visible' : ''}`}>
            <p className="MovieDescription">{props.movie.opening_crawl}</p>
            <p className="MovieDate">Released on: {formatDate(props.movie.edited)}</p>
            <button
              className="ActionButton"
              onClick={() => history.push(`/movie/${props.movie.id}`)}>
              GO TO MOVIE PAGE
            </button>
          </div>
          <div className="MoreInfoWrapper">
            <p className="MoreInfoText">{expanded? 'Less Info' : 'More Info'}</p>
            <p className="MoreInfoIcon">{expanded? '̭' : '̬'}    </p>
          </div>


        </div>
    );
}

export default MovieCard;
