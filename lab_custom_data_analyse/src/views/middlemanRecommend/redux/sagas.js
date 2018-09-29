import {fetchApi} from '../../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* loadMiddpersonListData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOADING_MIDDLEPERSON_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOADING_MIDDLEPERSON_ERROR', error})
  }
}

export function* loadTargetListData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOADING_TARGETLIST_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOADING_TARGETLIST_ERROR', error})
  }
}
