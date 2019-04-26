import { database } from '../firebaseConfig'

const SET_REDIRECT = 'addRating/SET_REDIRECT';
const SET_DATACHECK = 'addRating/SET_DATACHECK';

export const onClickSubmitFormAsyncActionCreator = (rating, comment) => (dispatch, getState) => {
    const re1 = /[a-zA-Z]{2,}/;
    const re2 = /\S+@\S+\.\S+/;
    const userName = getState().auth.user.displayName || getState().auth.user.email;
    const userEmail = getState().auth.user.email;
    const imdbID = getState().movieDetails.imdbID;

    re1.test(userName) && re2.test(userEmail) && (rating > 0)
        ? database.ref(`comments/`).child(`${imdbID}`).push({
            mark: rating,
            desc: comment,
            name: userName,
            email: userEmail,
        }).then(() => dispatch(setRedirectActionCreator(true)))
        : dispatch(setDataCheckActionCreator(false));
}

export const setRedirectActionCreator = redirect => ({
    type: SET_REDIRECT,
    redirect,
});

export const setDataCheckActionCreator = dataCheck => ({
    type: SET_DATACHECK,
    dataCheck,
});

const initialState = {
    redirect: false,
    dataCheck: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_REDIRECT:
            return {
                ...state,
                redirect: action.redirect,
            };
        case SET_DATACHECK:
            return {
                ...state,
                dataCheck: action.dataCheck,
            };
        default:
            return state;
    }
};