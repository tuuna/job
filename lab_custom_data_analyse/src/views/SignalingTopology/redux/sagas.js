import {fetchApi} from '../../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';

export function* loadSignTopology(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_SIGNTOPOLOGY_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_SIGNTOPOLOGY_ERROR', error})
  }
}

export function* loadSignBasicsTable(action)  {
  try{
    const data = yield call(fetchApi, action)
    yield put({type:'LOAD_SIGNBASICSTABLE_SUCCESS', result:data})
  }catch(error){
    yield put({type:'LOAD_SIGNBASICSTABLE_ERROR',error})
  }
}
