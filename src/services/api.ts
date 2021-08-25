import axios from 'axios';

const base_url = 'https://swapi.dev/api';

export async function getMovies() {
    const response = await axios.get(`${base_url}/films/`);
    return response.data.results;
}

export async function getChars(page: number) {
    const response = await axios.get(`${base_url}/people/`, { params: { page: page}});
    return response.data;
}

export async function getChar(url: string) {
    const response = await axios.get(`${url}`);
    return response.data;
}

export async function getMovieDetails(id: string) {
    const response = await axios.get(`${base_url}/films/${id}`);
    return response.data;
}

