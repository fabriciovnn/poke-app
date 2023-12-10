import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokeStore, Pokemon } from "./pokeStoreSlice";

//listar
export const listPagePokemons = createAsyncThunk(
  "list-pokemons",
  async (url: string): Promise<PokeStore | null> => {
    try {
      const response = await axios.get(url);
      const pokemons: Pokemon[] = [];

      for (const pokemon of response.data.results) {
        const responseDetail = await axios.get(pokemon.url);

        pokemons.push({
          id: responseDetail.data.id,
          name: responseDetail.data.name,
          imageUrl:
            responseDetail.data.sprites.other["official-artwork"].front_default,
          favorite: false,
          height: responseDetail.data.height,
          weight: responseDetail.data.weight,
          baseExperience: responseDetail.data.base_experience,
        });
      }

      return {
        isLoading: false,
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        pokemons: pokemons,
      };
    } catch {
      return null;
    }
  }
);
