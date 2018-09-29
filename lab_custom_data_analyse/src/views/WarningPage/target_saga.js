import { getAPI, postAPI } from "../../common/utils/fetch";
import { call, put } from "redux-saga/effects";

export function* loadWarningTable(action) {
  try {
    const data = yield call(postAPI, action);
    yield put({ type: "LOAD_WARNING_TABLE_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_TABLE_ERROR", error });
  }
}

export function* loadWarningPieChart(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_PIECHART_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_PIECHART_ERROR", error });
  }
}

export function* loadWarningChinaMap(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_CHINAMAP_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_CHINAMAP_ERROR", error });
  }
}

export function* loadWarningWorldMap(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_WORLDAMAP_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_WORLDAMAP_ERROR", error });
  }
}
