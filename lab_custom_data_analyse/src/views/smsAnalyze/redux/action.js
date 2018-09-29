import * as actionTypes from './actionType'


export function searchSMSLanguage(param){
	return {
		type: actionTypes.LOADING_SMSLANGUAGETOP,
		url:"/mock/smsAnalyze/smsLanguageTop.json",
		...param
	}
}

export function searchAppSMSReceiveFrequency(param){
	return {
		type: actionTypes.LOADING_APPRECEIVEFREQUENCY,
		url:"/mock/smsAnalyze/appSMSReceiveFrequency.json",
		...param
	}
}

export function searchAppContainsTarget(param){
	return {
		type: actionTypes.LOADING_APPCONTAINSTARGETMES,
		url:"/mock/smsAnalyze/appContainsTarget.json",
		...param
	}
}