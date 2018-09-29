import * as actionTypes from './actionTypes'

export function loadTopology(param) {
  return {
    type: actionTypes.LOAD_TOPOLOGY, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/topo/mock-topo.json',
    param: param
  };
}

export function loadCommunication(param) {
  return {
    type: actionTypes.LOAD_COMMUNICATION, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/topo/mock-commu.json',
    param: param
  };
}
