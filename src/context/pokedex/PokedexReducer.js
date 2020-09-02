import {
  LOAD_POKEMONS_START,
  LOAD_POKEMONS_READY,
  LOAD_POKEMONS_ERROR,
  LOAD_POKEMONS_DETAILS_START,
  LOAD_POKEMONS_DETAILS_READY,
  LOAD_POKEMONS_DETAILS_ERROR,
  LOAD_POKEMON_DETAILS_START,
  LOAD_POKEMON_DETAILS_READY,
  LOAD_POKEMON_DETAILS_ERROR,
  GO_BACK_BUTTON_PRESSED
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_POKEMONS_START:
      return {
        ...state,
        isFetchingData: true,
        isReady: false,
      };
    case LOAD_POKEMONS_READY:
      return {
        ...state,
        count: action.payload.count,
        next: action.payload.next,
        previous: action.payload.previous,
        isReady: true,
        withError: false,
      };
    case LOAD_POKEMONS_ERROR:
      return {
        ...state,
        error: action.payload,
        withError: true,
        isReady: false,
      };
    case LOAD_POKEMONS_DETAILS_START:
      return {
        ...state,
        isReady: false,
      };
    case LOAD_POKEMONS_DETAILS_READY:
      return {
        ...state,
        pokemons: action.payload,
        isReady: true,
        showingPokemonDetails: false,
        withError: false,
      };
    case LOAD_POKEMONS_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        isReady: false,
        withError: true,
      };
    case LOAD_POKEMON_DETAILS_START:
      return {
        ...state,
        showingPokemonDetails: true,
        isReady: false,
      };
    case LOAD_POKEMON_DETAILS_READY:
      return {
        ...state,
        currentPokemon: action.payload,
        isReady: true,
        withError: false,
      };
    case LOAD_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        withError: true,
      };
    case GO_BACK_BUTTON_PRESSED:
        return {
            ...state,
            preventReload: true
        }
    default:
      return state;
  }
};
