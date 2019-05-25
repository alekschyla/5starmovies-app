import { database } from '../firebaseConfig'

const SET_IMDBID = 'movieDetails/SET_IMDBID';
const SET_WATCHLIST = 'movieDetails/SET_WATCHLIST';
const SET_FAVOURITES = 'movieDetails/SET_FAVOURITES';

export const getWatchlistFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/watchlist`);
    refToMovies.on('value', (snapshot) => {
        dispatch(setWatchlistActionCreator(snapshot.val()));
    });
};

export const getFavouritesFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/favourites`);
    refToMovies.on('value', (snapshot) => {
        dispatch(setFavouritesActionCreator(snapshot.val()));
    });
};

export const addToWatchListAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/watchlist`);
    refToMovies.child(imdbID).set(true);
};

export const removeFromWatchListAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;
    const userUid = getState().auth.user.uid;
    database.ref(`users/${userUid}/watchlist/${imdbID}`).remove();
};


export const addToFavouritesAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/favourites`);
    refToMovies.child(imdbID).set(true);
};

export const removeFromFavouritesAsyncActionCreator = () => (dispatch, getState) => {
    const imdbID = getState().movieDetails.imdbID;
    const userUid = getState().auth.user.uid;
    database.ref(`users/${userUid}/favourites/${imdbID}`).remove()
};

export const stopListeningToWatchlistChangesAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/watchlist`);
    refToMovies.off();
};

export const stopListeningToFavouritesChangesAsyncActionCreator = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid;
    const refToMovies = database.ref(`users/${userUid}/favourites`);
    refToMovies.off();
};

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