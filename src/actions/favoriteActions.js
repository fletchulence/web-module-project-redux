export const TOGGLE_FAV = 'TOGGLE_FAV';
export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const toggleFavs = () =>{
   return ({type: TOGGLE_FAV})
}

export const addFav = (movie) =>{
   return({type:ADD_FAV, payload:movie})
}

export const removeFav = (id) =>{
   return ({type:REMOVE_FAV, payload:id})
}