

const initialState ={
   favorites: [],
   displayFavorites: false,
}

const favoritesReducer = (state = initialState, action) =>{
   switch(action.type) {
      // case ADD_FAV:
      //    return{

      //    }
      default:
         return state;
   }
}

export default favoritesReducer;