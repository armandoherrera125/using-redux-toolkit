import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
      page: 0,
      isLoading: false,
      pokemons: []
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
          return {
            ...state,
            isLoading: true,
          }
        },
        setPokemons: (state,  action ) => {
          return {
            ...state,
            pokemons : action.payload.pokemons,
            isLoading: false,
            page: action.payload.page,
          }
        },
    }
});


// Action creators are generated for each case reducer function
export default pokemonSlice.reducer;
export const { startLoadingPokemons,setPokemons } = pokemonSlice.actions;