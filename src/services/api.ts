import axios from 'axios';



export default class ApiService {

    api = axios.create({
        baseURL: 'https://swapi.dev/api',
        timeout: 10000
    });

    async getMovies() {
        const response = await this.api.get('films/');
        console.log(response.data.results);
        return response.data.results;
    }
}
