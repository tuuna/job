import { postAPI, getAPI } from "../../common/utils/fetch";
import { call, put } from "redux-saga/effects";


export function* loadDataAnalyse(action) {
    try {
        const data = yield call(getAPI, action);
        yield put({ type: "LOAD_DATA_ANALYSE_SUCCESS", result: data });
    } catch (error) {
        yield put({ type: "LOAD_DATA_ANALYSE_ERROR", error });
    }
}
export function* loadDataAnalyseTables(action) {
    try {
        console.log("enter")
        const data = yield call(getAPI, action);
        yield put({ type: "LOAD_DATA_TABLES_ANALYSE_SUCCESS", result: data });
    } catch (error) {
        yield put({ type: "LOAD_DATA_TABLES_ANALYSE_ERROR", error });
    }
}

export function* showTable(action) {
    try {
        const data = yield call(getAPI, action);
        console.log("qqqqqq");
        yield put({ type: "SHOW_TABLE_SUCCESS", result: data });
    } catch (error) {
        yield put({ type: "SHOW_TABLE_ERROR", error });
    }
}

export function* showCertainChartFrequency(action) {
    try {
        const data = yield call(getAPI, action);
        yield put({ type: "SHOW_CERTAIN_CHART_FREQUENCY_SUCCESS", result: data});
    } catch(error) {
        yield put({ type: "SHOW_CERTAIN_CHART_FREQUENCY_ERROR", error});
    }
}