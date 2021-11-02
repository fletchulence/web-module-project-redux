import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "David's Movie Database"
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                //? this is returning the updated state of deleted movies
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }

        default:
            //? when does this run?
            return state;
    }
}

export default reducer;