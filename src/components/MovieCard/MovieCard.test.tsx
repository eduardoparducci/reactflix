import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MovieCard from './MovieCard';
import Movie from '../../models/movie';

afterEach(cleanup);

// creates test data
const mock_movie: Movie = {episode_id: 0, title: 'Test 0', opening_crawl: 'Test opening crawl 0'};


it("should render movie card", () => {
    const { getByText } = render(<MovieCard movie={mock_movie}/>);
    const movie_card = getByText('Test 0');
    expect(movie_card).toBeTruthy();
});

it("should toggle expanded card state", () => {
    render(<MovieCard movie={mock_movie}/>);
    const movie_card = screen.getByTestId('MovieCard');

    // gives empty implementation of windows.alert to jsdom to supress error
    const jsdomAlert = window.alert;
    window.alert = () => {};

    // simulate card click to add to expandeds and check if opening crawl is being shown
    fireEvent.click(movie_card);
    expect(movie_card.classList.contains('Expanded')).toBe(true);
    expect(screen.getByText(mock_movie.opening_crawl)).toBeTruthy;
    
    // simulate card click to remove from expandeds
    fireEvent.click(movie_card);
    expect(movie_card.classList.contains('Expanded')).toBe(false);

    // restore original window.alert implementation
    window.alert = jsdomAlert;  // restore the jsdom alert
});


