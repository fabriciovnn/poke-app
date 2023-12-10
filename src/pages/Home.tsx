import { Backdrop, Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import MyAppBar from "../components/MyAppBar";
import ListPokemons from "../components/listPokemons";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listPagePokemons } from "../store/modules/pokestore/actions";

function Home() {
  const { isLoading } = useAppSelector((state) => state.pokeStore);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(listPagePokemons("https://pokeapi.co/api/v2/pokemon/"));
  }, [dispatch]);

  return (
    <Box component="main" bgcolor="#426397">
      <MyAppBar />
      <ListPokemons />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}

export default Home;
