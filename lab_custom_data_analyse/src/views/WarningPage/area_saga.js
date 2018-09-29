import { getAPI } from "../../common/utils/fetch";
import { call, put } from "redux-saga/effects";

export function* loadWarningWorldDiffuse(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_WORLDDIFFUSE_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_WORLDDIFFUSE_ERROR", error });
  }
}

export function* loadWarningAreaWorldMap(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_AREA_WORLDAMAP_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_AREA_WORLDAMAP_ERROR", error });
  }
}

export function* loadWarningChinaDiffuse(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_CHINADIFFUSE_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_CHINADIFFUSE_ERROR", error });
  }
}

export function* loadWarningAreaChinaMap(action) {
  try {
    const data = yield call(getAPI, action);
    yield put({ type: "LOAD_WARNING_AREA_CHINAMAP_SUCCESS", result: data });
  } catch (error) {
    yield put({ type: "LOAD_WARNING_AREA_CHINAMAP_ERROR", error });
  }
}
