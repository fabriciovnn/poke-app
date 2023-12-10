import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokeDexType {
  id: number;
  name: string;
  imageUrl: string;
}

const initialState: PokeDexType[] = [];

const pokeDexSlice = createSlice({
  name: "pokeDex",
  initialState,
  reducers: {
    addPokedex: (state, action: PayloadAction<PokeDexType>) => {
      const pokemonExist = state.findIndex(
        (pokemon) => pokemon.id == action.payload.id
      );
      if (pokemonExist !== -1) return;

      state = [...state, action.payload];

      return state;
    },

    removePokedex: (state, action: PayloadAction<{ id: number }>) => {
      const temp = [...state];

      const index = temp.findIndex(
        (pokemon) => pokemon.id === action.payload.id
      );

      if (index !== -1) {
        temp.splice(index, 1);
      }

      state = [...temp];
      return state;
    },
  },
});

export const { addPokedex, removePokedex } = pokeDexSlice.actions;
export default pokeDexSlice.reducer;
