import * as actionTypes from './actionTypes'

//定义信令检索的action
export function loadSignalling(param) {
  return {
    type: actionTypes.LOAD_SIGNALLING, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/demo/mock-table.json',
    param: param
  };
}

export function loadDetail(param) {
  return {type: actionTypes.LOAD_DETAIL, url: '/mock/demo/mock-detail.json', param: param};
}

export function closeDetail() {
  return {type: actionTypes.CLOSE_DETAIL};
}
