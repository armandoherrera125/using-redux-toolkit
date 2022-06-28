import axios from 'axios';
export const pokemonAxiosRequest = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
});