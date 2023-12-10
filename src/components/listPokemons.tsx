import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleFavorite } from "../store/modules/pokestore/pokeStoreSlice";

import { useNavigate } from "react-router-dom";
import {
  addPokedex,
  removePokedex,
} from "../store/modules/pokeDex/pokeDexSlice";
import { listPagePokemons } from "../store/modules/pokestore/actions";

function ListPokemons() {
  const state = useAppSelector((state) => state.pokeStore);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handlePage(page: string) {
    if (page === "previous" && state.previous) {
      dispatch(listPagePokemons(state.previous));
      return;
    }

    if (page === "next" && state.next) {
      dispatch(listPagePokemons(state.next));
      return;
    }
  }

  function handleFavorite(id: number) {
    const pokemon = state.pokemons.find((p) => p.id == id);
    if (!pokemon) return;

    if (pokemon.favorite) {
      dispatch(removePokedex({ id }));
    } else {
      dispatch(
        addPokedex({ id, name: pokemon.name, imageUrl: pokemon.imageUrl })
      );
    }

    dispatch(toggleFavorite({ id }));
  }

  function handleDetails(id: number) {
    navigate(`/detail/${id}`);
  }
  return (
    <Container maxWidth="lg">
      <Stack spacing={2} pt={2} direction="row" justifyContent="center">
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            handlePage("previous");
          }}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            handlePage("next");
          }}
        >
          Next
        </Button>
      </Stack>
      <Grid container paddingY={2} spacing={2}>
        {state.pokemons.map((pokemon) => (
          <Grid
            key={pokemon.id}
            item
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="stretch"
          >
            <Card
              sx={{ width: "100%", backgroundColor: "#d8d8d8" }}
              elevation={10}
            >
              <CardMedia sx={{ pt: "100%" }} image={pokemon.imageUrl} />
              <CardContent
                sx={{
                  pt: "5%",
                }}
              >
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#426397"
                >
                  Height {pokemon.height}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#426397"
                >
                  Weight: {pokemon.weight}
                </Typography>
                <Typography
                  gutterBottom
                  fontSize={14}
                  fontWeight="bold"
                  color="#426397"
                >
                  Base Experience: {pokemon.baseExperience}
                </Typography>

                <Typography
                  gutterBottom
                  fontSize={16}
                  fontWeight="bold"
                  mt={3}
                  textAlign="center"
                  color="#ef5350"
                  textTransform="uppercase"
                >
                  {pokemon.name}
                </Typography>
                <Stack direction="row" justifyContent="space-around">
                  <Button
                    variant="outlined"
                    onClick={() => handleDetails(pokemon.id)}
                  >
                    Details
                  </Button>
                  <IconButton
                    aria-label="Favorite"
                    color="error"
                    onClick={() => handleFavorite(pokemon.id)}
                  >
                    {pokemon.favorite ? (
                      <FavoriteRounded color="error" />
                    ) : (
                      <FavoriteBorderRounded color="error" />
                    )}
                  </IconButton>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ListPokemons;
