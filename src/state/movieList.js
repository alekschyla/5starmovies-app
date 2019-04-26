import { database } from '../firebaseConfig';

const SET_WATCHLIST = 'movieList/SET_WATCHLIST';
const SET_FAVOURITES = 'movieList/SET_FAVOURITES';

export const getFavouriteMoviesListFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    database.ref(`users/${userUid}/favourites`).on(
        'value',
        (snapshot) => {
            Promise.all(
                Object.keys(snapshot.val())
                    .map(
                        movieId => (
                            fetch(`http://www.omdbapi.com/?apikey=526cfe10&i=${movieId}`)
                                .then(r => r.json())
                        )
                    )
            )
                .then((movies) => dispatch(setFavouritesMovieListActionCreator(movies)))
        }
    )
};

export const getWatchlistMovieListFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    database.ref(`users/${userUid}/watchlist`).on(
        'value',
        (snapshot) => {
            Promise.all(
                Object.keys(snapshot.val())
                    .map(
                        movieId => (
                            fetch(`http://www.omdbapi.com/?apikey=526cfe10&i=${movieId}`)
                                .then(r => r.json())
                        )
                    )
            )
                .then((movies) => dispatch(setWatchlistMovieListActionCreator(movies)))
        }
    )
};

export const setWatchlistMovieListActionCreator = watchlistMovieList => ({
    type: SET_WATCHLIST,
    watchlistMovieList,
});

export const setFavouritesMovieListActionCreator = favouriteMoviesList => ({
    type: SET_FAVOURITES,
    favouriteMoviesList,
});

const initialState = {
    favouriteMoviesList: null,
    watchlistMovieList: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_WATCHLIST:
            return {
                ...state,
                watchlistMovieList: action.watchlistMovieList,
            };
        case SET_FAVOURITES:
            return {
                ...state,
                favouriteMoviesList: action.favouriteMoviesList,
            };
        default:
            return state;
    }
};