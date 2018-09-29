import { postAPI, getAPI } from "../../common/utils/fetch";
import { call, put } from "redux-saga/effects";


export function* loadFilterData(action) {
    try {
        const data = yield call(postAPI, action);
        yield put({ type: "LOAD_FILTER_MESSAGE_SUCCESS", result: data });
    } catch (error) {
        yield put({ type: "LOAD_FILTER_MESSAGE_ERROR", error });
    }
}

