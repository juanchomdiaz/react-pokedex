import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PokemonState from "./context/pokedex/PokedexState";
import PokedexMain from "./components/PokedexMain";
import PokemonDetails from "./components/PokemonDetails";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <PokemonState>
      <Router>
        <Switch>
          <Route exact path="/pokedex" component={PokedexMain} />
          <Route exact path="/pokemon/:name" component={PokemonDetails} />
          <Redirect from="/" to="/pokedex"/>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </PokemonState>
  );
};

export default App;
