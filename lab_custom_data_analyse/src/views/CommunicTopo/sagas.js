import {fetchApi} from '../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* loadTopology(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_TOPOLOGY_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_TOPOLOGY_ERROR', error})
  }
}

export function* loadCommunication(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_COMMUNICATION_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_COMMUNICATION_ERROR', error})
  }
}

export function* loadMessage(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_MESSAGE_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_MESSAGE_ERROR', error})
  }
}
