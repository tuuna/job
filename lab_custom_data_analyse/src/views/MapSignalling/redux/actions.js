import * as actionTypes from './actionTypes'

export function getPieChartMap(param){
	return {
		type: actionTypes.LOAD_PIECHART,
		url: '/mock/mapsign/pieChartData.json',
		...param
	}
}


export function getMapSigList(param){
	return {
		type: actionTypes.LOAD_SIGNLIST,
		url: '/mock/mapsign/mapSigListData.json',
		...param
	}
}

export function getLineChart(param){
	return {
		type: actionTypes.LOAD_LINECHART,
		url: '/mock/mapsign/lineChartData.json',
		...param
	}
}

export function lineTopBarChart(param){
	return {
		type: actionTypes.LOAD_LINETOP,
		url: '/mock/mapsign/lineTopBarCharData.json',
		...param
	}
}



export function analazyMes(param){
	return {
		type: actionTypes.LOAD_ANALAZYDATA,
		url: '/mock/mapsign/analazyData.json',
		...param
	}
}
