import React, { useState, useEffect } from 'react';
import {getMovieDetails, getChar} from '../../services/api';
import {Movie} from '../../models/movie';
import {  useParams } from "react-router-dom";
import './MovieDetail.css';

interface URLParams {
    id: string;
}

function formatDate(s: any) {
    return `${s.substring(5,7)}-${s.substring(8)}-${s.substring(0,4)}`;
}

function MovieDetail() {    

    // get movie id from URL
    const { id } = useParams<URLParams>();
    const [movie, setMovie] = useState<Movie>();
    const [chars, setChars] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // get Movie details from API when page is created
    useEffect(() => {
        
        const getData = async () => {
            try {
                setChars([]);
                setError(false);
                setLoading(true);
                const movie_res = await getMovieDetails(id);
                await setMovie(movie_res);
                for(let char of movie_res.characters) {
                    let person = await getChar(char);
                    //console.log(person.name);
                    setChars(c => [...c, person.name]);
                }
                setLoading(false);
            } catch(err) {
                setError(true);
            }
        };
        getData();
    }, [id]); //id is here to supress warning of missing dependency
    
    return (
        <div className="PageFrame">
          {error  && <h2>An error occured, please refresh the page.</h2>}
          {!error && loading && <h2>Fetching movie from the dark side...</h2>}
          {!error && !loading && movie && (
              <>

                <div className="ThumbDetailWrapper">
                  <img
                    className="ThumbDetail"
                    src={`${process.env.PUBLIC_URL}/assets/${movie.episode_id}.png`} alt="Movie thumb"
                  />
                </div>

                <div className="TitleWrapper"><h1 className="Title">{movie.title}</h1></div>

                <p className="TextInfo">Released on {formatDate(movie.release_date)}, {movie.title} was directed
                  by {movie.director} and produced by {movie.producer}. {movie.title} is the {movie.episode_id}
                  {movie.episode_id>2? 'th ' : movie.episode_id===1? 'st ' : 'nd '} movie following chronological order
                  in the Star Wars saga. Below you have the opening statement of the movie and the characters that
                  appeared in {movie.title}.</p>

                <h3 className="Subtitle">Opening Crawl:</h3>
                <p className="TextInfo">{movie.opening_crawl}</p>

                <h3 className="Subtitle">Characters: </h3>
                <ul className="CharList">
                  {chars.map((char, index) => (
                      <li key={index}>{char}</li>
                  ))}
                </ul>
              </>
          )}
        </div>
    );
}


export default MovieDetail;
