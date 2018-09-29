
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
		url:'/mock/target/jobListTarget.json',
		...param
	}
}

export function choiceTarget(param) {
    return {
    	type: choiceTargetAction,
    	url:'/mock/target/target.json',
    	...param
    }
}

export function sigBarTarget(param) {
	return {
		type: barAction,
		url:'/mock/target/chart.json',
		...param
	}
}

export function locationlistTarget(param){
	return {
		type: recentlocationAction,
		url:'/mock/target/locationData.json',
		...param
	}
}

export function cityFlowlistTarget(param){
	return {
		type: cityFlowListAction,
		url:'/mock/target/cityListData.json',
		...param
	}
}

export function phoneChangeHistoryTarget(param){
	return {
		type:phoneChangeHistoryAction,
		url:'/mock/target/phoneData.json',
		...param

	}
}

export function interConnecterTarget(param){
	return {
		type:interConnecterAction,
		url:'/mock/target/interConnecterData.json',
		...param
	}

}

export function foreignConnecterTarget(param){
	return {
		type:foreignConnecterAction,
		url:'/mock/target/foreignConnecterData.json',
		...param
	}

}

export function userContacterTradTarget(param){
	return {
		type: userContacterTradAction,
		url: '/mock/target/userContacterTradData.json',
		...param
	}
}
