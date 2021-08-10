import {getMovies} from '../../services/api';
import Home from './Home';
import { render, screen } from '@testing-library/react';

// setup service mock to avoid real HTTP requests and manilupate responses
jest.mock('../../services/api');
afterEach(jest.clearAllMocks);
const mockGetMovies = getMovies;
const mock_data_success = [
    {episode_id: 0, title: "test 0"},
    {episode_id: 1, title: "test 1"},
    {episode_id: 2, title: "test 2"}
];


it('should render home page', async () => {
    mockGetMovies.mockImplementationOnce(() => Promise.resolve(mock_data_success));
    const {findByText} = render(<Home />);
    const home_page = await findByText('Star Wars Movie List');
    expect(home_page).toBeTruthy();
});

it('should show error warning and ask for refresh', async () => {
    mockGetMovies.mockImplementationOnce(() => Promise.reject());
    const {findByText} = render(<Home />);
    const error_msg = await findByText('An error occured, please refresh the page.');
    expect(error_msg).toBeTruthy();
});

