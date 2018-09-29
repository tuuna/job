import {fetchApi} from '../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* getJobTarget(action){
	try {
    const data = yield call(fetchApi, action);
    console.log(data);
    yield put({type: 'LOAD_JOBLIST_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_TARGETMES_ERROR', error})
  }
}

export function* getChoiceTarget(action){
	try {
    const data = yield call(fetchApi, action);
    console.log(data);
    yield put({type: 'LOAD_TARGETMES_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_TARGETMES_ERROR', error})
  }
}
