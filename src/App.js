import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import PokedexState from "contexts/pokedex/PokedexState";

import PokedexMain from "components/pokedex/PokedexMain";
import PokemonDetails from "components/pokedex/PokemonDetails";
import AppLayout from "components/layout/AppLayout";

const App = () => {
  return (
    <PokedexState>
      <Router>
        <AppLayout>
            <Switch>
              <Route exact path="/pokedex" component={PokedexMain} />
              <Route exact path="/pokedex/:name" component={PokemonDetails} />
              <Redirect from="/" to="/pokedex" />
              <Route from="*" to="/pokedex"/>
            </Switch>
        </AppLayout>
      </Router>
    </PokedexState>
  );
};

export default App;
