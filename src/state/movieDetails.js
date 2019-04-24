import { database } from '../firebaseConfig'

const SET_IMDBID = 'movieDetails/SET_IMDBID';
const SET_WATCHLIST = 'movieDetails/SET_WATCHLIST';
const SET_FAVOURITES = 'movieDetails/SET_FAVOURITES';

export const setImdbIDActionCreator = imdbID => ({
    type: SET_IMDBID,
    imdbID,
});

export const setWatchlistActionCreator = watchlist => ({
    type: SET_WATCHLIST,
    watchlist,
});

export const setFavouritesActionCreator = favourites => ({
    type: SET_FAVOURITES,
    favourites,
});

const initialState = {
    imdbID: '',
    watchlist: null,
    favourites: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IMDBID:
            return {
                ...state,
                imdbID: action.imdbID ? (action.imdbID).replace(/:/, '') : "",
            };
        case SET_WATCHLIST:
            return {
                ...state,
                watchlist: action.watchlist,
            };
        case SET_FAVOURITES:
            return {
                ...state,
                favourites: action.favourites,
            };
        default:
            return state;
    }
};

