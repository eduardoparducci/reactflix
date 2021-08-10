import {getMovies} from './api';
import mockAxios from 'axios';

// setup axios mock to avoid real HTTP requests
jest.mock('axios');
afterEach(jest.clearAllMocks);

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

it('should return movie list', async () => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(mock_data));
    const result = await getMovies();
    expect(result).toBe(mock_data.data.results);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
});
