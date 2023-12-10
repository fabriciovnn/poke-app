import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PokemonDetail, Stat } from "./pokemonDetailSlice";

export const listPokemonDetailed = createAsyncThunk(
  "list-pokemon-detailed",
  async (id: string): Promise<PokemonDetail | null> => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      const abilities: Array<string> = [];
      const stats: Stat[] = [];

      for (const item of response.data.abilities) {
        abilities.push(item.ability.name);
      }

      for (const item of response.data.stats) {
        stats.push({
          name: item.stat.name,
          baseStat: item.base_stat,
        });
      }

      return {
        isLoading: false,
        id: response.data.id,
        name: response.data.name,
        image: response.data.sprites.other["official-artwork"].front_default,
        baseExpirience: response.data.base_experience,
        height: response.data.height,
        weight: response.data.weight,
        abilities,
        stats,
      };
    } catch {
      return null;
    }
  }
);
