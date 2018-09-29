import * as actionTypes from './actionType';

// 信令总量的数据请求
export function getSignAllCount(param){
	return {
		type: actionTypes.LOAD_SIGNCOUNT,
		url:"/mock/homePage/signAllCount.json",
		...param
	}
}

// 数据清洗数据请求
export function getDataClean(param){
	return {
		type: actionTypes.LOAD_DATACLEAN,
		url:"/mock/homePage/dataClean.json",
		...param
	}
}
