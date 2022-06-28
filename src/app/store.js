import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../slices/pokemon/pokemonsSlice";
export default configureStore({
    reducer: {
        counter: counterReducer,
        pokemondata: pokemonReducer,
    }
})