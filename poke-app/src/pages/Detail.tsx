import { Backdrop, Box, CircularProgress } from "@mui/material";
import DetailedPokemon from "../components/DetailedPokemon";
import Footer from "../components/Footer";
import MyAppBar from "../components/MyAppBar";
import { useAppSelector } from "../store/hooks";

function Detail() {
  const { isLoading } = useAppSelector((state) => state.pokeStore);
  return (
    <>
      <Box component="main" bgcolor="#426397" height="100%">
        <MyAppBar />

        <DetailedPokemon />

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>

      <Footer />
    </>
  );
}

export default Detail;
