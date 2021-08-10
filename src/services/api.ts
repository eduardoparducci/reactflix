import axios from 'axios';

const base_url = 'https://swapi.dev/api/';

export async function getMovies() {
    const response = await axios.get(`${base_url}films/`);
    return response.data.results;
}
