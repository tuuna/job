import {fetchApi} from '../../../common/utils/fetch'
import {call, put} from 'redux-saga/effects';
// 信令数量统计
export function* loadSignCount(action) {
  try {
    const data = yield call(fetchApi, action)
    yield put({type: 'LOAD_SIGNCOUNT_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_SIGNCOUNT_ERROR', error})
  }
}
// 数据前清洗
export function* loadDataClean (action){
  try{
    const data = yield call (fetchApi,action)
    console.info("1111---",data)
    yield put ({type:'LOAD_DATACLEAN_SUCCESS',result:data})
  }catch(error){
    yield put ({type: 'LOAD_DATACLEAN_ERROR',error})
  }
}
