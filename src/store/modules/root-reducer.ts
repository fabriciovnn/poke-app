import { combineReducers } from "@reduxjs/toolkit";
import pokeDexSlice from "./pokeDex/pokeDexSlice";
import pokemonDetailSlice from "./pokemonDetail/pokemonDetailSlice";
import pokeStoreSlice from "./pokestore/pokeStoreSlice";

const rootReducer = combineReducers({
  pokeStore: pokeStoreSlice,
  pokedex: pokeDexSlice,
  pokemonDetail: pokemonDetailSlice,
});

export default rootReducer;
