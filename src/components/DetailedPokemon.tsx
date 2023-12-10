import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { listPokemonDetailed } from "../store/modules/pokemonDetail/actions";
import { clearState } from "../store/modules/pokemonDetail/pokemonDetailSlice";

export function DetailedPokemon() {
  const { idPokemon } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemonDetail);

  useEffect(() => {
    if (idPokemon) {
      dispatch(listPokemonDetailed(idPokemon));
    }
  }, [dispatch, idPokemon]);

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack spacing={2} pt={2} alignItems="center">
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              dispatch(clearState());
              navigate("/");
            }}
          >
            Back
          </Button>
          <Typography
            component="h1"
            variant="h3"
            fontWeight="bold"
            textTransform="uppercase"
            color="#feca1b"
          >
            {pokemon.name}
          </Typography>
        </Stack>

        <Grid container paddingY={2} spacing={1}>
          <Grid item xs={12} sm={3} md={3}>
            <Box component="img" src={pokemon.image} width="300px"></Box>
          </Grid>

          <Grid item xs={4} sm={3} md={3}>
            <Typography variant="h5" fontWeight="bold" color="#ef5350">
              General Infos
            </Typography>
            <Stack flexDirection="row" gap={1}>
              <Typography fontWeight="bold">Base Experience:</Typography>
              <Typography fontWeight="bold" color="#feca1b">
                {pokemon.baseExpirience}
              </Typography>
            </Stack>

            <Stack flexDirection="row" gap={1}>
              <Typography fontWeight="bold">Height:</Typography>
              <Typography fontWeight="bold" color="#feca1b">
                {pokemon.height}
              </Typography>
            </Stack>

            <Stack flexDirection="row" gap={1}>
              <Typography fontWeight="bold">Weight:</Typography>
              <Typography fontWeight="bold" color="#feca1b">
                {pokemon.weight}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={4} sm={3} md={3}>
            <Typography variant="h5" fontWeight="bold" color="#ef5350">
              Abilities
            </Typography>
            {pokemon.abilities.map((ab) => (
              <Stack>
                <Typography fontWeight="bold" color="#feca1b">
                  {ab}
                </Typography>
              </Stack>
            ))}
          </Grid>

          <Grid item xs={4} sm={3} md={3}>
            <Typography variant="h5" fontWeight="bold" color="#ef5350">
              Stats
            </Typography>
            {pokemon.stats.map((ab) => (
              <Stack flexDirection="row" gap={1}>
                <Typography fontWeight="bold">{ab.name}:</Typography>
                <Typography fontWeight="bold" color="#feca1b">
                  {ab.baseStat}
                </Typography>
              </Stack>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default DetailedPokemon;
