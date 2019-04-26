import { database } from '../firebaseConfig';

const SET_DATA_FOR_CHART1 = 'dashboard/SET_DATA_FOR_CHART1';
const SET_DATA_FOR_CHART2 = 'dashboard/SET_DATA_FOR_CHART2';
const SET_LOGINS_LOG = 'dashboard/SET_LOGINS_LOG';

export const getLoginsLogFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    let loginsLog = null;
    database.ref(`userLogins/`).once('value').then(
        snapshot => loginsLog = snapshot.val()
    );
    loginsLog = Object.values(loginsLog).map(object => object.login).map(object => Object.values(object).map(object => object.timestamp))
        .reduce((r, timestamps) => r.concat(timestamps), []);
};

export const setDataForChart1ActionCreator = data => ({
    type: SET_DATA_FOR_CHART1,
    data,
});

export const setDataForChart2ActionCreator = data => ({
    type: SET_DATA_FOR_CHART2,
    data,
});

export const setLoginsLogActionCreator = data => ({
    type: SET_LOGINS_LOG,
    data,
});

const initialState = {
    loginsLog: null,
    dataForChart1: null,
    dataForChart2: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_FOR_CHART1:
            return {
                ...state,
                dataForChart1: action.data,
            };
        case SET_DATA_FOR_CHART2:
            return {
                ...state,
                dataForChart2: action.data,
            };
        case SET_LOGINS_LOG:
            return {
                ...state,
                loginsLog: action.data,
            };
        default:
            return state;
    }
};