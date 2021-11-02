import { TOGGLE_FAV, ADD_FAV, REMOVE_FAV } from '../actions/favoriteActions';

const initialState ={
   favorites: [],
   displayFavorites: false,
}

const favoritesReducer = (state = initialState, action) =>{
   switch(action.type) {
      case TOGGLE_FAV:
         return{
            ...state,
            //state.displayFavorites is important
            displayFavorites: !state.displayFavorites
         }
      case ADD_FAV:
         return{
            ...state,
            favorites: [...state.favorites, action.payload]
            //! action.payload is like telling the 
            //! app to head to action and then execute payload
         }
      case REMOVE_FAV:
         return{
            favorites: state.favorites.filter(item=>(action.payload !=item))
         }
      default:
         return state;
   }
}

export default favoritesReducer;