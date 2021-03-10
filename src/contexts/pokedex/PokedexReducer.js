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
  LOAD_SINGLE_POKEMON_START,
  LOAD_SINGLE_POKEMON_READY,
  LOAD_SINGLE_POKEMON_ERROR,
} from "./PokedexTypes";

const PokedexReducer = (state, action) => {
  switch (action.type) {
    case LOAD_POKEMONS_START:
      return {
        ...state,
        isReady: false,
        currentUrl: action.payload,
        currentPokemon: null
      };
    case LOAD_POKEMONS_READY:
      return {
        ...state,
        count: action.payload.count,
        nextUrl: action.payload.nextUrl,
        previousUrl: action.payload.previousUrl,
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
      };
    case LOAD_POKEMON_DETAILS_READY:
      return {
        ...state,
        currentPokemon: action.payload,
        withError: false,
        nextUrl: state.currentUrl,
      };
    case LOAD_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        error: action.payload,
        withError: true,
      };
    case LOAD_SINGLE_POKEMON_START:
      return {
        ...state,
        withError: false
      };
    case LOAD_SINGLE_POKEMON_READY:
      return {
        ...state,
        withError: false
      };
    case LOAD_SINGLE_POKEMON_ERROR:
      return {
        ...state,
        withError: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export default PokedexReducer;
