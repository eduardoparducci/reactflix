import React, { useState, useEffect } from 'react';
import {getMovies, getChars} from '../../services/api';
import {Movie} from '../../models/movie';
import {Char} from '../../models/char';
import CardsGrid from '../../components/CardsGrid/CardsGrid'; 
import './Home.css';

function Home() {    

    const [chars, setChars] = useState<Char[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loadingMovies, setLoadingMovies] = useState(true);
    const [loadingChars, setLoadingChars] = useState(true);
    const [error, setError] = useState(false);
    
    // get Movies from API when page is created
    useEffect(() => {
        const getInfo = async () => {
            try {
                setError(false);
                setLoadingMovies(true);
                const response = await getMovies();                
                response.forEach((movie, index) => {
                    movie.id = index+1;
                });
                setMovies(response);
                setLoadingMovies(false);
            } catch(err) {
                setError(true);
            }
        };
        getInfo();
    }, []);

    useEffect(() => {
        const getInfo = async () => {
            let all_chars = [];
            let response: any;
            let i=1;
            // get all chars from api
            setLoadingChars(true);
            do {
                response = await getChars(i);
                for(let item of response.results) {
                    all_chars.push(item);
                }
                i++;
            } while(response && response.next!==null);
            all_chars.sort((a, b) => a.films.length > b.films.length ? -1 : 1);

            // give awards to chars that most appeared
            const max = all_chars[0].films.length;
            i=0;
            do {
                all_chars[i].award = max - all_chars[i].films.length + 1;
                i++;
            } while(all_chars[i].films.length>=max-2);
            
            // replace movie names of fist 9 characters
            all_chars = all_chars.slice(0,10);            
            for(let i=0;i<10;i++) {
                all_chars[i].films = all_chars[i].films.map(f => movies.find(m => m.url===f).title);
            }
            setChars(all_chars);
            setLoadingChars(false);
        };

        if(movies.length) getInfo();        
    }, [movies]);

    return (
        <>
          <h1>Star Wars Movie List</h1>
          {error  && <h2>An error occured, please refresh the page.</h2>}
          {!error && loadingMovies && <h2>Fetching movies from the dark side...</h2>}
          {!error && !loadingMovies &&
           <>
             <p className="Tooltip">Click on the movie titles to know a little more about them!</p>           
             <CardsGrid entity={movies} />
           </>
          }
          {!error && !loadingMovies && <h1>Star Wars Main Characters</h1>}
          {!error && !loadingMovies && loadingChars && <h2>Fetching characters that most appeared in the Star Wars saga...</h2>}
          {!error && !loadingChars &&
           <>
             <p className="Tooltip">Below, you see the top 10 characters that appeared the most in the Star Wars saga,
               click on them to see in which movies they appeared!</p>                        
             <CardsGrid entity={chars} />
           </>
          }
        </>
    );
}

export default Home;
