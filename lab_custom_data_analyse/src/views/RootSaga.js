import { takeEvery, takeLatest } from "redux-saga/effects";
import { loadSignCount, loadDataClean } from "./Home/redux/sagas";
import { watchDog as UserPage } from "./UserPage/redux/sagas";
import {
    loadMiddpersonListData,
    loadTargetListData
} from "./middlemanRecommend/redux/sagas";
import { loadTopology, loadCommunication } from "./CommunicTopo/redux/sagas";
import {
    loadAnalazyData,
    loadLineChart,
    loadLineTop,
    loadPieChart,
    loadSignList
} from "./MapSignalling/redux/sagas";
import { loadSignalling, loadDetail } from "./SignallingAnalyse/redux/sagas";
import {
    loadSignTopology,
    loadSignBasicsTable
} from "./SignalingTopology/redux/sagas";
import {
    loadSmsLanguageListData,
    loadAppReceiveSMSFrequencyListData,
    loadAppContaionsTargetListData
} from "./smsAnalyze/redux/sagas";
import {
    loadWarningTable,
    loadWarningPieChart,
    loadWarningChinaMap,
    loadWarningWorldMap
} from "./WarningPage/target_saga";

import { loadFilterData } from "./MessagePage/saga";

import {
    loadWarningWorldDiffuse,
    loadWarningAreaWorldMap,
    loadWarningChinaDiffuse,
    loadWarningAreaChinaMap
} from "./WarningPage/area_saga";

import {
    loadDataAnalyse,
    loadDataAnalyseTables,
    showTable,
    showCertainChartFrequency
} from "./DataAnalyse/getTable_sage";


export function* watchIncrementAsync() {
    // 首页
    yield takeLatest("LOAD_SIGNCOUNT", loadSignCount);
    yield takeLatest("LOAD_DATACLEAN", loadDataClean);

    //用户通联拓扑
    yield takeLatest("LOAD_TOPOLOGY", loadTopology);
    yield takeLatest("LOAD_COMMUNICATION", loadCommunication);

    //中间人分析
    yield takeLatest("LOADING_MIDDLEPERSON", loadMiddpersonListData);
    yield takeLatest("LOADING_TARGETLIST", loadTargetListData);

    //map信令
    yield takeLatest("LOAD_PIECHART", loadPieChart);
    yield takeLatest("LOAD_SIGNLIST", loadSignList);
    yield takeLatest("LOAD_LINECHART", loadLineChart);
    yield takeLatest("LOAD_LINETOP", loadLineTop);
    yield takeLatest("LOAD_ANALAZYDATA", loadAnalazyData);

    // 信令点拓扑
    yield takeLatest("LOAD_SIGNTOPOLOGY", loadSignTopology);
    yield takeLatest("LOAD_SIGNBASICSTABLE", loadSignBasicsTable);

    // 短信规律分析
    yield takeLatest("LOADING_SMS_LANGUAGETOP", loadSmsLanguageListData);
    yield takeLatest(
        "LOADING_APP_RECEIVE_FREQUENCY",
        loadAppReceiveSMSFrequencyListData
    );
    yield takeLatest(
        "LOADING_APP_CONTAINS_TARGET",
        loadAppContaionsTargetListData
    );

    //keda
    yield takeLatest("LOAD_WARNING_TABLE", loadWarningTable);
    yield takeLatest("LOAD_WARNING_PIECHART", loadWarningPieChart);
    yield takeLatest("LOAD_WARNING_CHINAMAP", loadWarningChinaMap);
    yield takeLatest("LOAD_WARNING_WORLDAMAP", loadWarningWorldMap);
    yield takeLatest("LOAD_WARNING_WORLDDIFFUSE", loadWarningWorldDiffuse);
    yield takeLatest("LOAD_WARNING_CHINADIFFUSE", loadWarningChinaDiffuse);
    yield takeLatest("LOAD_WARNING_AREA_CHINAMAP", loadWarningAreaChinaMap);
    yield takeLatest("LOAD_WARNING_AREA_WORLDAMAP", loadWarningAreaWorldMap);
    yield takeLatest("LOAD_FILTER_MESSAGE", loadFilterData);



    //demo
    yield takeLatest("LOAD_SIGNALLING", loadSignalling);
    yield takeEvery("LOAD_DETAIL", loadDetail);

    //数据分析
    //获取数据表
    yield takeLatest("LOAD_DATA_ANALYSE", loadDataAnalyse);
    yield takeLatest("LOAD_DATA_TABLES_ANALYSE",loadDataAnalyseTables);
    yield takeLatest("SHOW_TABLE",showTable);
    yield takeLatest("SHOW_CERTAIN_CHART_FREQUENCY",showCertainChartFrequency);
    //用户信息
    yield UserPage();
}

export default function* RootSaga() {
    yield watchIncrementAsync();
}
