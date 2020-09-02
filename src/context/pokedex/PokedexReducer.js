import { LIST_FETCH_REQUEST, LIST_FETCH_SUCCESS, DETAILS_FETCH_SUCCESS } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case LIST_FETCH_REQUEST:
            return {
                ...state,
                isFetchingList: true,
                isFullyLoaded: false
            }
        case LIST_FETCH_SUCCESS:
            return {
                ...state,
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                isFetchingList: false 
            }
        case DETAILS_FETCH_SUCCESS:
            return {
                ...state,
                pokemons: action.payload,
                isFullyLoaded: true
            }
        default:
            return state;
    }
}