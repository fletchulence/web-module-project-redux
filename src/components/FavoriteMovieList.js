import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFav } from '../actions/favoriteActions';


const FavoriteMovieList = (props) => {
    // const favorites = [];

    const handleRemoveFav = (id) =>{
        props.removeFav(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            //changing thhis to props.favorites when 
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span>
                            <span 
                                class="material-icons"
                                onClick={()=>handleRemoveFav(movie)}
                            >remove_circle</span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) =>{
    return({
        favorites: state.favoritesState.favorites,
        displayFavorites: state.favoritesState.displayFavorites
    })
}


export default connect(mapStateToProps, { removeFav })(FavoriteMovieList);