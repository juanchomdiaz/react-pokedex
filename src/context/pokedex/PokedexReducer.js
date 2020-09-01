import { FETCH_POKEMONS } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case FETCH_POKEMONS:
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                pokemons: action.payload.results
            }
        default:
            return state;
    }
}