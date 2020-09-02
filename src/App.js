import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PokemonState from "./context/pokedex/PokedexState";
import PokedexMain from "./components/PokedexMain";
import PokemonDetails from "./components/PokemonDetails";
import AppLayout from "./AppLayout";

const App = () => {
  return (
    <PokemonState>
      <Router>
        <AppLayout>
          <Redirect from="/" to="/pokedex" />
          <Switch>
            <Route exact path="/pokedex" component={PokedexMain} />
            <Route exact path="/pokedex/pokemon/:name" component={PokemonDetails} />
          </Switch>
        </AppLayout>
      </Router>
    </PokemonState>
  );
};

export default App;
