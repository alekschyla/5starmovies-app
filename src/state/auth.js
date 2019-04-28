import { auth, database, googleProvider } from '../firebaseConfig';
import { setFavouritesMovieListActionCreator, setWatchlistMovieListActionCreator } from './movieList';
import { setImdbIDActionCreator, setWatchlistActionCreator, setFavouritesActionCreator } from './movieDetails';
import { clearMoviesDataActionCreator } from './movies';
import { clearMovieDetailsActionCreator } from './movieDetailsFetch';
import { clearMovieCommentsDataActionCreator } from './movieCommentsFetch';
import { setDataForAreaChartActionCreator, setDataForPieChartActionCreator, stopListeningToDataForPieChartChangesAsyncActionCreator } from './dashboard';

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED';
const PASS_CHANGED = 'auth/PASS_CHANGED';
const USER_NAME_CHANGED = 'auth/USER_NAME_CHANGED';
const PASSW_CONF_CHANGED = 'auth/PASSW_CONF_CHANGED';
const PASSW_CHECK = 'auth/PASSW_CHECK';
const SET_USER = 'auth/SET_USER';
const SET_USER_LOGIN_LOGS = 'auth/SET_USER_LOGIN_LOGS';

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
export const setUserLoginLogsActionCreator = (data) => ({
    type: SET_USER_LOGIN_LOGS,
    data,
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
                    dispatch(saveUserDataActionCreator());
                    dispatch(startListeningToUserLoginLogsAsyncCreator())
                } else {
                    dispatch(setUserLoginLogsActionCreator(null));
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
                });
            })
            .then(data => window.history.pushState(null, null, '/'))
            .catch(error => alert(`wystąpił błąd ${error}. Spróbuj ponownie.`));
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
        .catch(error => alert(`Wystąpił błąd ${error}. Spróbuj ponownie.`));
};

export const logInByGoogleAsyncActionCreator = () => (dispatch, getState) => {
    auth.signInWithPopup(googleProvider)
        .catch(error => alert(`Wystąpił błąd ${error}. Spróbuj ponownie.`));
};

export const logOutAsyncActionCreator = () => (dispatch, getState) => {
    auth.signOut()
        .then(data => window.history.pushState(null, null, '/'))
        .then(() => {
            dispatch(setWatchlistMovieListActionCreator(null));
            dispatch(setFavouritesMovieListActionCreator(null));
            dispatch(setImdbIDActionCreator(''));
            dispatch(setWatchlistActionCreator(null));
            dispatch(setFavouritesActionCreator(null));
            dispatch(clearMoviesDataActionCreator());
            dispatch(clearMovieDetailsActionCreator());
            dispatch(clearMovieCommentsDataActionCreator());
            dispatch(setUserLoginLogsActionCreator(null));
            dispatch(setDataForAreaChartActionCreator(null));
            dispatch(setDataForPieChartActionCreator(null));
            dispatch(stopListeningToDataForPieChartChangesAsyncActionCreator());
            dispatch(stopListeningToUserLoginLogsAsyncCreator());
        });
};

export const saveUserDataActionCreator = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    const userData = {
        timestamp: Date.now(),
    };
    database.ref(`userLogins/${uid}/login`).push(userData);
};

export const startListeningToUserLoginLogsAsyncCreator = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    database.ref(`userLogins/${uid}/login`).on(
        'value',
        snapshot => dispatch(setUserLoginLogsActionCreator(snapshot.val()))
    );
};

export const stopListeningToUserLoginLogsAsyncCreator = () => (dispatch, getState) => {
    const uid = getState().auth.user.uid;
    database.ref(`userLogins/${uid}/login`).off();
};

const initialState = {
    user: null,
    email: '',
    password: '',
    userName: '',
    passwordConfirm: '',
    passwordCheck: true,
    userLoginData: null,
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
        case SET_USER_LOGIN_LOGS:
            return {
                ...state,
                userLoginData: action.data,
            };
        default:
            return state;
    }
}