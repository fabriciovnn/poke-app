import { Button, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function MyAppBar() {
  const count = useAppSelector((state) => state.pokeStore.count);
  const navigate = useNavigate();
  return (
    <AppBar position="static" sx={{ py: 3, backgroundColor: "#ef5350" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={2}
      >
        <Typography variant="h6" fontWeight="bold" color="#feca1b">
          Count: {count}
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="#feca1b"
          fontWeight="bold"
        >
          PokéApp from PokéAPI
        </Typography>

        <Button
          variant="outlined"
          sx={{ color: "#feca1b", borderColor: "#feca1b" }}
          onClick={() => navigate("/pokedex")}
        >
          PokéDex
        </Button>
      </Stack>
    </AppBar>
  );
}

export default MyAppBar;
