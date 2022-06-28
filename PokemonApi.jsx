import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPokemonsAPI } from './src/slices/pokemon/thunks';
export const PokemonApi = () => {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getPokemonsAPI())
    },[])
    const pokemonsState = useSelector( state => state.pokemondata.pokemons);
    const isLoadingStore = useSelector(state => state.pokemondata.isLoading);
    const page = useSelector(state => state.pokemondata.page);
    console.log(pokemonsState);
  return (
    <div style={{padding: 20}}>
        <h1>PokemonApi</h1>
        <hr/>
        {
          isLoadingStore 
          ?
          <h1>Cargando...</h1>
            
          :
          <h2>Ya cargue</h2>
        }
        <ul>
          {
            pokemonsState.map( (pokemon,i) =>{
              return (
                <li key={i}>{pokemon.name}</li>
              )
            })
          }
        </ul>
        <button onClick={ () => dispatch(getPokemonsAPI(page))} disabled={isLoadingStore}>Mostrar los otros 10</button>
    </div>
  )
}
