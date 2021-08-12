import {getMovies, getChar, getMovieDetails} from './api';
import mockAxios from 'axios';

// setup axios mock to avoid real HTTP requests
jest.mock('axios');
afterEach(jest.clearAllMocks);

it('should return movie list', async () => {
    const mock_data = {
        data: {
            results: [
                {episode_id: 0, title: "test 0"},
                {episode_id: 1, title: "test 1"},
                {episode_id: 2, title: "test 2"}
            ]
        },
        status: 200,
        statusText: 'OK',
        config: {},
        headers: {}    
    };
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mock_data));
    const result = await getMovies();
    expect(result).toBe(mock_data.data.results);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

it('should return a character information', async () => {
    const mock_data = {
        data: {
            name: "Test with id 0",
            url: "https://swapi.dev/api/people/0/"
        }
    };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mock_data));
    const result = await getChar(mock_data.data.url);
    expect(result).toBe(mock_data.data);
    expect(mockAxios.get).toHaveBeenCalledWith(mock_data.data.url);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

it('should return movie information', async () => {
    const mock_data = {
        data: {
            title: "Test movie 0",
            episode_id: 0,
            opening_crawl: "Test resume 0",
            director: "Test director",
            producer: "Test producer",
            release_date: "2021-08-11",
            characters: [
                "https://swapi.dev/api/people/0/",
                "https://swapi.dev/api/people/1/",
            ],
        }
    };

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mock_data));
    const result = await getMovieDetails("0");
    expect(result).toBe(mock_data.data);
    expect(mockAxios.get).toHaveBeenCalledWith("https://swapi.dev/api/films/0");
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});

