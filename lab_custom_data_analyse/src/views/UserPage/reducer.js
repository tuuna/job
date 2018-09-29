const initalState={
	"targetMes":{
	"count":0,
	"user":{
			"name":"testOne",
			},
	"jobList":[],
	  "selectTarget":{
	  	"size":23
	  },
	}
}

const reducer =(state=initalState,action) => {
	switch(action.type) {
		case "LOAD_TARGETMES_SUCCESS":
		 return  {...state,
		 	selectTarget:
		 	{...state.selectTarget,...action.result}};
		 case "LOAD_JOBLIST_SUCCESS":
		 return{
		 	...state,...action.result
		 }
		default:
		return state
	}
}


const choiceTargetAction='CHOICE_TARGET'
const barAction='SIGBAR_TARGET'
const recentlocationAction="RECENTLOCATION_TARGET"
const cityFlowListAction="CITYFLOW_TARGET"
const phoneChangeHistoryAction="PHONECHANGEHISTORY_TARGET"

const  interConnecterAction="INTERCONNECTER_TARGET"
const  foreignConnecterAction="FOREIGNCONNECTER_TARGET"
const userContacterTradAction="USERCONTACTERTRAD_TARGET"

const jobListAction="JOBLIST_TARGET"

export function jobListTarget(param){
	return {
		type:jobListAction,
		url:'/json/target/jobListTarget.json',
		...param
	}
}

export function choiceTarget(param) {
    return {
    	type: choiceTargetAction,
    	url:'/json/target/target.json',
    	...param
    }
}

export function sigBarTarget(param) {
	return {
		type: barAction,
		url:'/json/target/chart.json',
		...param
	}
}

export function locationlistTarget(param){
	return {
		type: recentlocationAction,
		url:'/json/target/locationData.json',
		...param
	}
}

export function cityFlowlistTarget(param){
	return {
		type: cityFlowListAction,
		url:'/json/target/cityListData.json',
		...param
	}
}

export function phoneChangeHistoryTarget(param){
	return {
		type:phoneChangeHistoryAction,
		url:'/json/target/phoneData.json',
		...param

	}
}

export function interConnecterTarget(param){
	return {
		type:interConnecterAction,
		url:'/json/target/interConnecterData.json',
		...param
	}

}

export function foreignConnecterTarget(param){
	return {
		type:foreignConnecterAction,
		url:'/json/target/foreignConnecterData.json',
		...param
	}

}

export function userContacterTradTarget(param){
	return {
		type: userContacterTradAction,
		url: '/json/target/userContacterTradData.json',
		...param
	}
}



/* 导出的字段名称固定, 方便后续的store去处理 */
export default {initialState, reducer};
