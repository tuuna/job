import {combineReducers} from "redux"
import {initialState} from '../../assets/store'
import targetMes from './selectTarget'
import mapSumMes from "./mapSigSumReducer"
export const allReduer=combineReducers({
	targetMes:targetMes,
	mapSumMes:mapSumMes,

})
