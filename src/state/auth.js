import {auth, googleProvider, database} from '../firebaseConfig'

const EMAIL_CHANGED = 'auth/EMAIL_CHANGED';
const PASS_CHANGED = 'auth/PASS_CHANGED';
const SET_USER = 'auth/SET_USER';
const SET_USER_LOGIN_LOGS = 'auth/SET_USER_LOGIN_LOGS';

export const changeEmailActionCreator = (newValue) => ({
    type: EMAIL_CHANGED,
    newValue,
});
export const changePasswordActionCreator = (newValue) => ({
    type: PASS_CHANGED,
    newValue,
});
const setUserActionCreator = user => ({
    type: SET_USER,
    user,
});
const setUsersLoginLogsActionCreator = data => ({
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
                    dispatch(changePasswordActionCreator(''));
                    dispatch(logUserLoginAsyncActionCreator());
                    dispatch(startListeningUserLoginLogsAsyncActionCreators())
                } else {
                    dispatch(stopListeningUserLoginLogsAsyncActionCreators());
                    dispatch(setUsersLoginLogsActionCreator(null));
                    dispatch(setUserActionCreator(user));
                }
            }
        )
    }
);

export const startListeningUserLoginLogsAsyncActionCreators = (
    () => (dispatch, getState) => {
        const state = getState();
        const userID = state.auth.user.uid;
        database.ref(`/users/${userID}/login`)
            .on(
                'value',
                (snapshot) => {
                    dispatch(setUsersLoginLogsActionCreator(snapshot.val()))
                }
            )
    }
);
export const stopListeningUserLoginLogsAsyncActionCreators = (
    () => (dispatch, getState) => {
        const state = getState();
        const userID = state.auth.user.uid;
        database.ref(`/users/${userID}/login`)
            .of()
    }
);
const logUserLoginAsyncActionCreator = () => (dispatch, getState) => {
    const state = getState();
    const userID = state.auth.user.uid;
    database.ref(`/users/${userID}/login`)
        .push({
            timestamp: Date.now(),
        })
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
    auth.signOut();
};

const initialState = {
    user: null,
    email: '',
    password: '',
    userLoginLogs: null,
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

        case SET_USER:
            return {
                ...state,
                user: action.user,
            };

        case SET_USER_LOGIN_LOGS:
            return {
                ...state,
                userLoginLogs: action.data,
            };

        default:
            return state
    }
}