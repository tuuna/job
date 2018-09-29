import {combineReducers } from 'redux'
import {reducer as SignallingCheck} from './SignallingAnalyse/index'
import {reducer as CommunicTopo} from './CommunicTopo/index'
import {reducer as Mapsignalling} from './MapSignalling/index'
import targetMes from './UserPage/redux/reducer'
import {reducer as MiddlemenRecommend} from './middlemanRecommend'
import {reducer as SignalingTopology} from './SignalingTopology/index';
import {reducer as SmsAnalyze } from "./smsAnalyze";
import {reducer as Home} from "./Home/index";

import TargetMonitor from "./WarningPage/target_reducer";
import AreaAnalyse from "./WarningPage/area_reducer";
import MessagePage from "./MessagePage/reducer";

import GetTable from "./DataAnalyse/getTable_reducer";
// 定义reducer
// 每个组件自己的reducer负责维护自己的状态, 注意key的名字和组件名一致
const reducers= combineReducers({
    SignallingCheck: SignallingCheck.reducer,
    CommunicTopo:CommunicTopo.reducer,
    Mapsignalling:Mapsignalling.reducer,
    MiddlemenRecommend:MiddlemenRecommend.reducer,
    targetMes:targetMes.targetMes,
    SignalingTopology:SignalingTopology.reducer,
    SmsAnalyze:SmsAnalyze.reducer,
    Home:Home.reducer,
    TargetMonitor: TargetMonitor.reducer,
    AreaAnalyse: AreaAnalyse.reducer,
    MessagePage: MessagePage.reducer,
    GetTable: GetTable.reducer
});

// 整体的初始状态
// 就是把每个组件自己的初始状态组合起来, 注意key的名字和组件名一致
const initState = {
    SignallingCheck: SignallingCheck.initialState,
    CommunicTopo: CommunicTopo.initialState,
    Mapsignalling: Mapsignalling.initialState,
    MiddlemenRecommend:MiddlemenRecommend.initialState,
    targetMes:targetMes.initialState,
    SignalingTopology:SignalingTopology.initialState,
    SmsAnalyze:SmsAnalyze.initialState,
    Home:Home.initialState,

    TargetMonitor: TargetMonitor.initialState,
    AreaAnalyse: AreaAnalyse.initialState,
    MessagePage: MessagePage.initialState,
    GetTable: GetTable.initialState
};

export {reducers,initState}
