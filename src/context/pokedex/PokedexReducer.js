import { LIST_FETCH_REQUEST, LIST_FETCH_SUCCESS, DETAILS_FETCH_SUCCESS } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case LIST_FETCH_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LIST_FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
            }
        case DETAILS_FETCH_SUCCESS:
            return {
                ...state,
                pokemons: action.payload
            }
        default:
            return state;
    }
}