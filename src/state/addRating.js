import { database } from '../firebaseConfig'

const SET_REDIRECT = 'addRating/SET_REDIRECT';
const SET_DATACHECK = 'addRating/SET_DATACHECK';

export const onClickSubmitFormAsyncActionCreator = (rating, comment) => (dispatch, getState) => {
    const re1 = /[a-zA-Z]{2,}/;
    const userUid = getState().auth.user.uid;
    const userName = getState().auth.user.displayName;
    const imdbID = getState().movieDetails.imdbID;

    re1.test(userName) && (rating > 0)
        ? database.ref(`comments/${imdbID}`).child(userUid).set({
            mark: rating,
            desc: comment,
            name: userName,
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