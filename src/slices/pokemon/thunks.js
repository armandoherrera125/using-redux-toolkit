import { pokemonAxiosRequest } from "../../api/pokemonAxios";
import { startLoadingPokemons,setPokemons } from "./pokemonsSlice"

export const getPokemonsAPI = ( page = 0) => {
    return async(dispatch) => {
        dispatch(startLoadingPokemons());
        const {data} = await pokemonAxiosRequest.get(`/pokemon?limit=10&offset=${page*10}`);
        console.log(data);
        setTimeout(() => {
            
            // const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
            // const res = await data.json();
            dispatch(setPokemons({
                page: page+1,
                pokemons: data.results
            }))
        }, 5000);
    }
}