import * as actionTypes from './actionTypes'

export function changeSearchWay(param){
	return {
		type: actionTypes.SEARCHWAY,
		...param
	}
}

export function searchByMiddlePersonStatu(param){
	return {
		type: actionTypes.LOADING_MIDDLEPERSON,
		url:"/mock/middlePersonRecommend/middlepersonListData.json",
		...param
	}
}

export function searchMiddlepersonByTargets(param){
	return {
		type: actionTypes.LOADING_TARGETLIST,
		url:"/mock/middlePersonRecommend/targetListData.json",
		...param
	}
}
