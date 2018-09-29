import {fetchApi} from '../../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* loadSmsLanguageListData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOADING_SMS_LANGUAGETOP_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOADING_SMS_LANGUAGETOP_ERROR', error})
  }
}

export function* loadAppReceiveSMSFrequencyListData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOADING_APP_RECEIVE_FREQUENCY_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOADING_APP_RECEIVE_FREQUENCY_ERROR', error})
  }
}

export function* loadAppContaionsTargetListData(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOADING_APP_CONTAINS_TARGET_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOADING_APP_CONTAINS_TARGET_ERROR', error})
  }
}