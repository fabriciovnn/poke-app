import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { listPagePokemons } from "./actions";

export interface Pokemon {
  id: number;
  name: string;
  favorite: boolean;
  imageUrl: string;
  height: number;
  weight: number;
  baseExperience: number;
}

export interface PokeStore {
  isLoading: boolean;
  count: number;
  next: string | null;
  previous: string | null;
  pokemons: Pokemon[];
}

const initialState: PokeStore = {
  isLoading: false,
  count: 0,
  next: null,
  previous: null,
  pokemons: [],
};

const pokeStoreSlice = createSlice({
  name: "pokeStore",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state.pokemons];

      const index = temp.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );

      if (index !== -1) {
        temp[index].favorite = !temp[index].favorite;
      }

      state.pokemons = [...temp];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(listPagePokemons.pending, (state) => {
        state.isLoading = true;
        console.log("BUSCANDO OS POKEMONS...");
      })
      .addCase(listPagePokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload) {
          return;
        }
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.pokemons = action.payload.pokemons;

        return state;
      });
  },
});

export const { toggleFavorite } = pokeStoreSlice.actions;
export default pokeStoreSlice.reducer;
