import React from 'react';
import App from '../App';
import Home from '../pages/home/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../pages/home/Home');

it('should render home page on default route', () => {
    Home.mockImplementation(() => <div>HomePageMock</div>);

    render(
      <MemoryRouter>
        <App/>
      </MemoryRouter>        
    );

    expect(screen.getByText('HomePageMock')).toBeInTheDocument();
});

