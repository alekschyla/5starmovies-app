import { database } from '../firebaseConfig'

const SET_IMDBID = 'movieDetails/SET_IMDBID';

export const setImdbIDActionCreator = imdbID => ({
    type: SET_IMDBID,
    imdbID,
});

const initialState = {
    imdbID: '',
    movieComments: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_IMDBID:
            return {
                ...state,
                imdbID: action.imdbID? (action.imdbID).replace(/:/, '') : "",
            };
        default:
            return state;
    }
};

