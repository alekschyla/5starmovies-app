import { database } from '../firebaseConfig';

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

        const todayLogs = loginsLog.filter(timestamp => timestamp >= todayMidnight).length;
        const yesterdayLogs = loginsLog.filter(timestamp => timestamp < todayMidnight && timestamp >= (todayMidnight - 24 * 60 * 60 * 1000)).length;
        const dayBeforeYesterdayLogs = loginsLog.filter(timestamp => timestamp < (todayMidnight - 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - 2 * 24 * 60 * 60 * 1000)).length;
        const twoDaysBeforeYesterdayLogs = loginsLog.filter(timestamp => timestamp < (todayMidnight - 2 * 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - 3 * 24 * 60 * 60 * 1000)).length;
        const threeDaysBeforeYesterdayLogs = loginsLog.filter(timestamp => timestamp < (todayMidnight - 3 * 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - 4 * 24 * 60 * 60 * 1000)).length;
        const fourDaysBeforeYesterdayLogs = loginsLog.filter(timestamp => timestamp < (todayMidnight - 4 * 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - 5 * 24 * 60 * 60 * 1000)).length;
        const fiveDaysBeforeYesterdayLogs = loginsLog.filter(timestamp => timestamp < (todayMidnight - 5 * 24 * 60 * 60 * 1000) && timestamp >= (todayMidnight - 6 * 24 * 60 * 60 * 1000)).length;
        let data = [
            {
                "day": "6 dni wcześniej",
                "liczba użytkowników": 0,
            },
            {
                "day": "5 dni wcześniej",
                "liczba użytkowników": 0,
            },
            {
                "day": "4 dni wcześniej",
                "liczba użytkowników": 0,
            },
            {
                "day": "3 dni wcześniej",
                "liczba użytkowników": 0,
            },
            {
                "day": "Przedwczoraj",
                "liczba użytkowników": 0,
            },
            {
                "day": "Wczoraj",
                "liczba użytkowników": 0,
            },
            {
                "day": "Dziś",
                "liczba użytkowników": 0,
            },
        ];
        data[0]["liczba użytkowników"] = fiveDaysBeforeYesterdayLogs;
        data[1]["liczba użytkowników"] = fourDaysBeforeYesterdayLogs;
        data[2]["liczba użytkowników"] = threeDaysBeforeYesterdayLogs;
        data[3]["liczba użytkowników"] = twoDaysBeforeYesterdayLogs;
        data[4]["liczba użytkowników"] = dayBeforeYesterdayLogs;
        data[5]["liczba użytkowników"] = yesterdayLogs;
        data[6]["liczba użytkowników"] = todayLogs;
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