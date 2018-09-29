import * as actionTypes from './actionTypes'

export function loadSignTopology(param) {
  return {
    type: actionTypes.LOAD_SIGNTOPOLOGY, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/signTopo/signTopo.json',
    param: param,
  };
}
// LOAD_SIGNBASICSTABLE
export function loadSignBasicsTable (param) {
  return{
    type:actionTypes.LOAD_SIGNBASICSTABLE,
    url:'/mock/signTopo/signBasicsTable.json',
    param: param,
  }
}
