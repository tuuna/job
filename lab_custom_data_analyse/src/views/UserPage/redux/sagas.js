
import {put,takeEvery,call} from 'redux-saga/effects'
import {fetchApi} from '../../../common/utils/fetch'

function* getChoiceTarget(action){
	try {
    const data = yield call(fetchApi, action);
    console.log(data);
    yield put({type: 'LOAD_TARGETMES_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_TARGETMES_ERROR', error})
  }
}

function* getJobTarget(action){
	try {
    const data = yield call(fetchApi, action);
    //console.log(data);
    yield put({type: 'LOAD_JOBLIST_SUCCESS', result: data})
  } catch (error) {
    yield put({type: 'LOAD_TARGETMES_ERROR', error})
  }
}

function* getMapSigSum(action){
	try {
	    const data = yield call(fetchApi, action);
	    console.log(data);
	    yield put({type: 'LOAD_MAPSUMMES_SUCCESS', result: data})
	  } catch (error) {
	    yield put({type: 'LOAD_TARGETMES_ERROR', error})
	  }
}

function* getListSig(action){
	try {
		let loadingMes={"siglistStatusLoading":true};
		yield put({type: 'LOAD_MAPSUMMES_LOADING', result:loadingMes})
	    const data = yield call(fetchApi, action);
	    let finallData={...data,"status":{"siglistStatusLoading":false}}
	    yield put({type: 'LOAD_MAPSUMMES_SUCCESS', result: finallData})
	  } catch (error) {
	    yield put({type: 'LOAD_TARGETMES_ERROR', error})
	  }
}

 export function* watchDog(){
 	yield takeEvery("JOBLIST_TARGET",getJobTarget);
	yield takeEvery("CHOICE_TARGET",getChoiceTarget);
	yield takeEvery("SIGBAR_TARGET",getChoiceTarget);
	yield takeEvery("RECENTLOCATION_TARGET",getChoiceTarget);
	yield takeEvery("CITYFLOW_TARGET",getChoiceTarget);
	yield takeEvery("PHONECHANGEHISTORY_TARGET",getChoiceTarget);
	yield takeEvery("INTERCONNECTER_TARGET", getChoiceTarget);
	yield takeEvery("FOREIGNCONNECTER_TARGET",getChoiceTarget);
	yield takeEvery("USERCONTACTERTRAD_TARGET",getChoiceTarget);
	yield takeEvery("PIECHARTLIST_MAP",getMapSigSum);
	yield takeEvery("MAPSIGLIST_MAP",getListSig);
	yield takeEvery("LINECHART_MAP",getMapSigSum);
	yield takeEvery("LINETOPBARCHAR_MAP",getMapSigSum);
	yield takeEvery("ANALAZY_MAP",getMapSigSum);
}
