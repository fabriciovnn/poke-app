import { createSlice } from "@reduxjs/toolkit";
import { listPokemonDetailed } from "./actions";

export interface Stat {
  baseStat: number;
  name: string;
}

export interface PokemonDetail {
  isLoading: boolean;
  id: number;
  name: string;
  image: string;
  abilities: Array<string>;
  baseExpirience: number;
  height: number;
  weight: number;
  stats: Stat[];
}

const initialState: PokemonDetail = {
  isLoading: false,
  id: 0,
  name: "",
  image: "",
  abilities: [],
  baseExpirience: 0,
  height: 0,
  weight: 0,
  stats: [],
};

const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listPokemonDetailed.pending, (state) => {
        state.isLoading = true;
        console.log("BUSCANDO O POKEMON...");
      })
      .addCase(listPokemonDetailed.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload) {
          return;
        }

        state.id = action.payload.id;
        state.image = action.payload.image;
        state.height = action.payload.height;
        state.weight = action.payload.weight;
        state.baseExpirience = action.payload.baseExpirience;
        state.abilities = action.payload.abilities;
        state.stats = action.payload.stats;
        state.name = action.payload.name;

        return state;
      });
  },
});

export const { clearState } = pokemonDetailSlice.actions;
export default pokemonDetailSlice.reducer;
