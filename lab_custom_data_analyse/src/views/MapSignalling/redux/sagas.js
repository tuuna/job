import {fetchApi} from '../../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';
// import {takeEvery, takeLatest} from 'redux-saga/effects';

export function* loadPieChart(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_PIECHART_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_PIECHART_ERROR', error})
  }
}

export function* loadSignList(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_SIGNLIST_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_SIGNLIST_ERROR', error})
  }
}

export function* loadLineChart(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_LINECHART_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_LINECHART_ERROR', error})
  }
}

export function* loadLineTop(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_LINETOP_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_LINETOP_ERROR', error})
  }
}

export function* loadAnalazyData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_ANALAZYDATA_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_ANALAZYDATA_ERROR', error})
  }
}


