import userPhoto from '../images/user.svg';

const SET_REDIRECT = 'userProfile/SET_REDIRECT';
const SET_NAMECHECK = 'userProfile/SET_NAMECHECK';
const SET_EMAILCHECK = 'userProfile/SET_EMAILCHECK';
const SET_URLCHECK = 'userProfile/SET_URLCHECK';
const SET_SUCCESS = 'userProfile/SET_SUCCESS';
const SET_ERROR = 'userProfile/SET_ERROR';

export const onClickSubmitFormAsyncActionCreator = (name, email, photoURL) => (dispatch, getState) => {
    const re1 = /[a-zA-Z]{2,}/;
    const re2 = /\S+@\S+\.\S+/;
    const user = getState().auth.user;
    let userName = getState().auth.user.displayName;
    let userEmail = getState().auth.user.email;
    let userPhotoURL = getState().auth.user.photoURL || userPhoto;

    if (!((re1.test(name) || name.length === 0))) dispatch(setNameCheckActionCreator(false)); else dispatch(setNameCheckActionCreator(true));
    if (!(photoURL.length > 10 || photoURL.length === 0)) dispatch(setURLCheckActionCreator(false)); else dispatch(setURLCheckActionCreator(true));
    if (!(re2.test(email) || email.length === 0)) dispatch(setEmailCheckActionCreator(false)); else dispatch(setEmailCheckActionCreator(true));

    const nameCheck = getState().userProfile.nameCheck;
    const emailCheck = getState().userProfile.emailCheck;
    const urlCheck = getState().userProfile.urlCheck;

    const updateName = (nameCheck && (name.length > 0) && (name !== userName)) ?
        user.updateProfile({
            displayName: name
        })
            .then(() => dispatch(setSuccessActionCreator(true)))
            .catch(error => dispatch(setErrorActionCreator(true)))
        : null;
    const updateEmail = (emailCheck && (email.length > 0) && (email !== userEmail)) ?
        user.updateEmail(email)
            .then(() => dispatch(setSuccessActionCreator(true)))
            .catch(error => dispatch(setErrorActionCreator(true)))
        : null;
    const updatePhotoURL = (urlCheck && (photoURL.length > 0) && (photoURL !== userPhotoURL)) ?
        user.updateProfile({
            photoURL: photoURL
        })
            .then(() => dispatch(setSuccessActionCreator(true)))
            .catch(error => dispatch(setErrorActionCreator(true)))
        : null;

    Promise.all([
        updateName,
        updateEmail,
        updatePhotoURL,
    ])
        .then(() => {
            const error = getState().userProfile.error;
            const success = getState().userProfile.success;

            if (!error && success && nameCheck && emailCheck && urlCheck) {
                dispatch(setRedirectActionCreator(true));
            }
        })
        .catch(error => dispatch(setErrorActionCreator(true)));
}

export const setRedirectActionCreator = redirect => ({
    type: SET_REDIRECT,
    redirect,
});

export const setNameCheckActionCreator = nameCheck => ({
    type: SET_NAMECHECK,
    nameCheck,
});

export const setEmailCheckActionCreator = emailCheck => ({
    type: SET_EMAILCHECK,
    emailCheck,
});

export const setURLCheckActionCreator = urlCheck => ({
    type: SET_URLCHECK,
    urlCheck,
});

export const setSuccessActionCreator = success => ({
    type: SET_SUCCESS,
    success,
});

export const setErrorActionCreator = error => ({
    type: SET_ERROR,
    error,
});

const initialState = {
    redirect: false,
    success: false,
    error: false,
    nameCheck: true,
    emailCheck: true,
    urlCheck: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_REDIRECT:
            return {
                ...state,
                redirect: action.redirect,
            };
        case SET_NAMECHECK:
            return {
                ...state,
                nameCheck: action.nameCheck,
            };
        case SET_EMAILCHECK:
            return {
                ...state,
                emailCheck: action.emailCheck,
            };
        case SET_URLCHECK:
            return {
                ...state,
                urlCheck: action.urlCheck,
            };
        case SET_SUCCESS:
            return {
                ...state,
                success: action.success,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        default:
            return state;
    }
};