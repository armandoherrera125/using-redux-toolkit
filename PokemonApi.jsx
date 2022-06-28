import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPokemonsAPI } from './src/slices/pokemon/thunks';
export const PokemonApi = () => {
   const dispatch = useDispatch();
  // const {entities,loading} = useSelector( state => state.pokemondata );
   useEffect(() => {
    dispatch(getPokemonsAPI())
   },[])
  // console.log(entities,loading);
  return (
    <div style={{padding: 20}}>
        <h1>PokemonApi</h1>
        <hr/>
        <ul>
            <li>Hola</li>
            <li>Hola</li>
            <li>Hola</li>
        </ul>
    </div>
  )
}
