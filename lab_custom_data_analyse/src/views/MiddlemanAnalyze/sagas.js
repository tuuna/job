import {fetchApi} from '../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* loadDetail(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_DETAIL_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_DETAIL_ERROR', error})
  }
}


export function* loadSignalling(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_SIGNALLING_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_SIGNALLING_ERROR', error})
  }
}
