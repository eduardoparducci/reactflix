import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import MovieCard from './MovieCard';

afterEach(cleanup);

// creates test data
const mock_movie = {episode_id: 0, title: 'Test 0'};


it("should render movie card", () => {
    const { getByText } = render(<MovieCard movie={mock_movie}/>);
    const movie_card = getByText('Test 0');
    expect(movie_card).toBeTruthy();
});

it("should toggle favorite state", () => {
    render(<MovieCard movie={mock_movie}/>);
    const movie_card = screen.getByTestId('MovieCard');

    // gives empty implementation of windows.alert to jsdom to supress error
    const jsdomAlert = window.alert;
    window.alert = () => {};

    // simulate card click to add to favorites
    fireEvent.click(movie_card);
    expect(movie_card.classList.contains('Favorite')).toBe(true);

    // simulate card click to remove from favorites
    fireEvent.click(movie_card);
    expect(movie_card.classList.contains('Favorite')).toBe(false);

    // restore original window.alert implementation
    window.alert = jsdomAlert;  // restore the jsdom alert
});


