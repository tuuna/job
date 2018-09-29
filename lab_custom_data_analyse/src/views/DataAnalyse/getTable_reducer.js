const initialState = {
    tableList: {
        data:[],
        loading: true,
        error: false,
       // total: 0
    },
    tables:{
        data:[],
        loading: true,
        error: false
    },
    showTableList: {
        data:[],
        loading: true,
        error: false,
        // total: 0
    },
    showFrequencyList: {
        data:[],
        loading: true,
        error: false
    }
};

const LOAD_DATA_ANALYSE = "LOAD_DATA_ANALYSE";
const LOAD_DATA_ANALYSE_SUCCESS = "LOAD_DATA_ANALYSE_SUCCESS";
const LOAD_DATA_ANALYSE_ERROR = "LOAD_DATA_ANALYSE_ERROR";

const LOAD_DATA_TABLES_ANALYSE="LOAD_DATA_TABLES_ANALYSE";
const LOAD_DATA_TABLES_ANALYSE_SUCCESS="LOAD_DATA_TABLES_ANALYSE_SUCCESS";
const LOAD_DATA_TABLES_ANALYSE_ERROR="LOAD_DATA_TABLES_ANALYSE_ERROR";

const SHOW_TABLE = "SHOW_TABLE";
const SHOW_TABLE_SUCCESS = "SHOW_TABLE_SUCCESS";
const SHOW_TABLE_ERROR = "SHOW_TABLE_ERROR";

const SHOW_CERTAIN_CHART_FREQUENCY = "SHOW_CERTAIN_CHART_FREQUENCY";
const SHOW_CERTAIN_CHART_FREQUENCY_SUCCESS = "SHOW_CERTAIN_CHART_FREQUENCY_SUCCESS";
const SHOW_CERTAIN_CHART_FREQUENCY_ERROR = "SHOW_CERTAIN_CHART_FREQUENCY_ERROR";

export function loadDataAnalyse(param) {
    return{
        type: LOAD_DATA_ANALYSE,
        url:"/mock/tableList/tables.json",
        //url: "localhost:8080/test/gettable",
        param: param
    };
}

export function loadDataAnalyseTables(param) {
    return{
        type: LOAD_DATA_TABLES_ANALYSE,
        url:"/mock/tableList/tablecontent.json",
        //url: "localhost:8080/test/gettable",
        param: param
    };
}

export function showTable(param) {
    return{
        type: SHOW_TABLE,
        url:"/mock/tableList/column.json",
        //url: "localhost:8080/test/getcolumn",
        param: param
    };
}

export function showCertainChartFrequency(param) {
    return {
        type: SHOW_CERTAIN_CHART_FREQUENCY,
        url:"/mock/tableList/analyzeFrequency.json",
        // url:"localhost:8080/test/analyzeFrequency",
        param: param
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA_ANALYSE: {
            return {
                ...state,
                tableList: {
                    data:[],
                 //   total: 0,
                    loading: true,
                    error: false,
                }
            };
        }
        case LOAD_DATA_ANALYSE_SUCCESS: {
            let result = action.result;
            return {
                ...state,
                tableList: {
                    data:result.data,
                   // total: result.total,
                    loading: false,
                    error: false,
                }
            };
        }
        case LOAD_DATA_ANALYSE_ERROR: {
            return {
                ...state,
                tableList: {
                    data:[],
                    loading: false,
                    error: true,
                }
            };
        }

        case LOAD_DATA_TABLES_ANALYSE:{
            return {
                ...state,
                tables: {
                    data:[],
                    //   total: 0,
                    loading: true,
                    error: false,
                }
            };
        }
        case LOAD_DATA_TABLES_ANALYSE_SUCCESS: {
            let result = action.result;
            return {
                ...state,
                tables: {
                    data:result.data,
                    // total: result.total,
                    loading: false,
                    error: false,
                }
            };
        }
        case LOAD_DATA_TABLES_ANALYSE_ERROR: {
            return {
                ...state,
                tables: {
                    data:[],
                    loading: false,
                    error: true,
                }
            };
        }

        case SHOW_TABLE: {
            return {
                ...state,
                showTableList: {
                    data:[],
                    //   total: 0,
                    loading: true,
                    error: false,
                }
            };
        }
        case SHOW_TABLE_SUCCESS: {
            let result = action.result;
            return {
                ...state,
                showTableList: {
                    data:result.data,
                    // total: result.total,
                    loading: false,
                    error: false,
                }
            };
        }
        case SHOW_TABLE_ERROR: {
            return {
                ...state,
                showTableList: {
                    data:[],
                    loading: false,
                    error: true,
                }
            };
        }

        case SHOW_CERTAIN_CHART_FREQUENCY: {
            return {
                ...state,
                showFrequencyList: {
                    data:[],
                    //   total: 0,
                    loading: true,
                    error: false,
                }
            };
        }
        case SHOW_CERTAIN_CHART_FREQUENCY_SUCCESS: {
            let result = action.result;
            return {
                ...state,
                showFrequencyList: {
                    data:result.data,
                    // total: result.total,
                    loading: false,
                    error: false,
                }
            };
        }
        case SHOW_CERTAIN_CHART_FREQUENCY_ERROR: {
            return {
                ...state,
                showFrequencyList: {
                    data:[],
                    loading: false,
                    error: true,
                }
            };
        }

        default:
            return state;
    }
};

export default { initialState, reducer };
