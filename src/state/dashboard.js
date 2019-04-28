import { database } from '../firebaseConfig';
import moment from 'moment';
import 'moment/locale/pl';

const SET_DATA_FOR_AREACHART = 'dashboard/SET_DATA_FOR_AREACHART';
const SET_DATA_FOR_PIECHART = 'dashboard/SET_DATA_FOR_PIECHART';

export const getLoginsLogFromFirebaseAsyncActionCreator = () => (dispatch, getState) => {
    let loginsLog = null;
    database.ref(`userLogins`).once('value').then(
        snapshot => loginsLog = snapshot.val()
    ).then(() => {
        loginsLog = Object.values(loginsLog).map(object => object.login).map(object => Object.values(object).map(object => object.timestamp))
            .reduce((r, timestamps) => r.concat(timestamps), []);

        const nowDate = new Date();
        nowDate.setMilliseconds(0);
        nowDate.setSeconds(0);
        nowDate.setMinutes(0);
        const todayMidnight = nowDate.setHours(0);

        const data = new Array(7).fill(1).reduce((reduced, el, index) => reduced.concat({
            "day": moment(new Date() - index * 24 * 60 * 60 * 1000).format('dddd'),
            "liczba użytkowników": loginsLog.filter(timestamp => timestamp < (todayMidnight - (index - 1) * 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - index * 24 * 60 * 60 * 1000)).length,
        }), []
        ).reverse();
        console.log(data);
        dispatch(setDataForAreaChartActionCreator(data));
    })
};

export const setDataForAreaChartActionCreator = data => ({
    type: SET_DATA_FOR_AREACHART,
    data,
});

export const setDataForPieChartActionCreator = data => ({
    type: SET_DATA_FOR_PIECHART,
    data,
});

const initialState = {
    dataForAreaChart: null,
    dataForPieChart: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_FOR_AREACHART:
            return {
                ...state,
                dataForAreaChart: action.data,
            };
        case SET_DATA_FOR_PIECHART:
            return {
                ...state,
                dataForPieChart: action.data,
            };
        default:
            return state;
    }
};