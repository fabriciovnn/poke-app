import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function Pokedex() {
  const state = useAppSelector((state) => state.pokedex);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.length) {
      navigate("/");
    }
  }, [state, navigate]);

  return (
    <>
      <Box component="main" bgcolor="#426397" padding={1} height="100vh">
        <Button variant="outlined" color="error" onClick={() => navigate("/")}>
          Back
        </Button>
        <Stack alignItems="center">
          <Typography color="#feca1b" variant="h3" fontWeight="bold">
            POKEDEX
          </Typography>
        </Stack>
        <Container maxWidth="lg">
          <Grid container maxHeight="100%">
            {state.map((pokemon) => (
              <Grid item>
                <Box component="img" src={pokemon.imageUrl} width="150px"></Box>
                <Typography
                  textAlign="center"
                  fontWeight="bold"
                  color="#feca1b"
                >
                  {pokemon.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Pokedex;
