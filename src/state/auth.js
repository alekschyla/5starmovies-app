import {auth, googleProvider} from '../firebaseConfig'

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED';
const PASS_CHANGED = 'auth/PASS_CHANGED';
const USER_NAME_CHANGED = 'auth/USER_NAME_CHANGED';
const PASSW_CONF_CHANGED = 'auth/PASSW_CONF_CHANGED';
const PASSW_CHECK = 'auth/PASSW_CHECK';
const SET_USER = 'auth/SET_USER';

const setUserActionCreator = user => ({
    type: SET_USER,
    user,
});
export const changeEmailActionCreator = (newValue) => ({
    type: EMAIL_CHANGED,
    newValue,
});
export const changePasswordActionCreator = (newValue) => ({
    type: PASS_CHANGED,
    newValue,
});
export const changeUserNameActionCreator = (newValue) => ({
    type: USER_NAME_CHANGED,
    newValue,
});
export const passwordConfirmChangeActionCreator = (newPasswordConfirm) => ({
    type: PASSW_CONF_CHANGED,
    newPasswordConfirm,
});
export const passwordCheckChangeActionCreator = (newPasswordCheck) => ({
    type: PASSW_CHECK,
    newPasswordCheck,
});

export const startListeningToAuthChangeAsyncActionCreator = (
    () => (dispatch, getState) => {
        auth.onAuthStateChanged(
            (user) => {
                if (user) {
                    dispatch(setUserActionCreator(user));
                    dispatch(changeEmailActionCreator(''));
                    dispatch(changeUserNameActionCreator(''));
                    dispatch(passwordConfirmChangeActionCreator(''));
                    dispatch(changePasswordActionCreator(''));
                } else {
                    dispatch(setUserActionCreator(user));
                }
            }
        )
    }
);
export const registerUserActionCreator = () => (dispatch, getState) => {
    const state = getState();
    if (state.auth.passwordCheck) {
        auth.createUserWithEmailAndPassword(state.auth.email, state.auth.password)
            .then(() => {
                    let user = auth.currentUser;

                    user.updateProfile({
                        displayName: state.auth.userName,
                    })
                }
            )
            .then( data => window.history.pushState(null, null, '/'))
            .catch(error => console.log('wystąpił błąd', error));
    }
};
export const comparePasswordsActionCreator = (newPasswordConfirm) => (dispatch, getState) => {
    dispatch(passwordConfirmChangeActionCreator(newPasswordConfirm));
    const state = getState();
    return state.auth.password === state.auth.passwordConfirm ?
        dispatch(passwordCheckChangeActionCreator(true))
        : dispatch(passwordCheckChangeActionCreator(false));
};
export const logInAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState();
    const email = state.auth.email;
    const password = state.auth.password;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('Zalogowano'))
        .catch(error => console.log('Wystąpił błąd', error))
};
export const logInByGoogleAsyncActionCreator = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .then(() => console.log('Zalogowano'))
        .catch(error => console.log('Wystąpił błąd', error))
};
export const logOutAsyncActionCreator = () => (dispatch, getState) => {
    auth.signOut()
        .then( data => window.history.pushState(null, null, '/'));
};

const initialState = {
    user: true,
    email: '',
    password: '',
    userName: '',
    passwordConfirm: '',
    passwordCheck: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.newValue,
            };
        case PASS_CHANGED:
            return {
                ...state,
                password: action.newValue,
            };

        case USER_NAME_CHANGED:
            return {
                ...state,
                userName: action.newValue,
            };


        case PASSW_CONF_CHANGED:
            return {
                ...state,
                passwordConfirm: action.newPasswordConfirm,
            };

        case PASSW_CHECK:
            return {
                ...state,
                passwordCheck: action.newPasswordCheck,
            };

        case SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state
    }
}