import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Pokedex from "../pages/Pokedex";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:idPokemon",
    element: <Detail />,
  },
  {
    path: "/pokedex",
    element: <Pokedex />,
  },
]);

function RoutesApp() {
  return <RouterProvider router={routes} />;
}

export default RoutesApp;
