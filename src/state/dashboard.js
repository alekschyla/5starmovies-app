import { database } from '../firebaseConfig';

const SET_DATA_FOR_CHART1 = 'dashboard/SET_DATA_FOR_CHART1';
const SET_DATA_FOR_CHART2 = 'dashboard/SET_DATA_FOR_CHART2';


export const setDataForChart1ActionCreator = data => ({
    type: SET_DATA_FOR_CHART1,
    data,
});

export const setDataForChart2ActionCreator = data => ({
    type: SET_DATA_FOR_CHART2,
    data,
});

const initialState = {
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
        default:
            return state;
    }
};