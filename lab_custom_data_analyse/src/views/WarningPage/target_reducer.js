const initialState = {
  table: {
    total: 0,
    result: [],
    loading: true,
    error: false
  },
  pieChart: {
    result: [],
    loading: true,
    error: false
  },
  chinaMap: {
    result: [],
    loading: true,
    error: false
  },
  worldMap: {
    result: [],
    loading: true,
    error: false
  }
};

const LOAD_WARNING_TABLE = "LOAD_WARNING_TABLE";
const LOAD_WARNING_TABLE_SUCCESS = "LOAD_WARNING_TABLE_SUCCESS";
const LOAD_WARNING_TABLE_ERROR = "LOAD_WARNING_TABLE_ERROR";

const LOAD_WARNING_PIECHART = "LOAD_WARNING_PIECHART";
const LOAD_WARNING_PIECHART_SUCCESS = "LOAD_WARNING_PIECHART_SUCCESS";
const LOAD_WARNING_PIECHART_ERROR = "LOAD_WARNING_PIECHART_ERROR";

const LOAD_WARNING_CHINAMAP = "LOAD_WARNING_CHINAMAP";
const LOAD_WARNING_CHINAMAP_SUCCESS = "LOAD_WARNING_CHINAMAP_SUCCESS";
const LOAD_WARNING_CHINAMAP_ERROR = "LOAD_WARNING_CHINAMAP_ERROR";

const LOAD_WARNING_WORLDAMAP = "LOAD_WARNING_WORLDAMAP";
const LOAD_WARNING_WORLDAMAP_SUCCESS = "LOAD_WARNING_WORLDAMAP_SUCCESS";
const LOAD_WARNING_WORLDAMAP_ERROR = "LOAD_WARNING_WORLDAMAP_ERROR";

export function loadWarningTable(param) {
  return {
    type: LOAD_WARNING_TABLE,
    url: "/mock/usc/mock-warning-table.json",
    // url: "http://192.168.0.128:8080/alert/find/condition",
    param: param
  };
}
export function loadWarningPieChart(param) {
  return {
    type: LOAD_WARNING_PIECHART,
    url: "/mock/usc/mock-warning-piechart.json",
    // url: "http://192.168.0.128:8080/alert/alertType",
    param: param
  };
}
export function loadWarningChinaMap(param) {
  return {
    type: LOAD_WARNING_CHINAMAP,
    url: "/mock/usc/mock-warning-chinamap.json",
    // url: "http://192.168.0.128:8080/alert/targetSpread/domestic",
    param: param
  };
}
export function loadWarningWorldMap(param) {
  return {
    type: LOAD_WARNING_WORLDAMAP,
    url: "/mock/usc/mock-warning-worldmap.json",
    // url: "http://192.168.0.128:8080/alert/targetSpread/world",
    param: param
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WARNING_TABLE: {
      return {
        ...state,
        table: {
          total: 0,
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_TABLE_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        table: {
          total:
            result.data.totalElements === undefined
              ? 0
              : result.data.totalElements,
          result: result.data.content === undefined ? [] : result.data.content,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_TABLE_ERROR: {
      return {
        ...state,
        table: {
          total: 0,
          result: [],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_PIECHART: {
      return {
        ...state,
        pieChart: {
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_PIECHART_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        pieChart: {
          result: result.data === undefined ? [] : result.data,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_PIECHART_ERROR: {
      return {
        ...state,
        pieChart: {
          result: [],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_CHINAMAP: {
      return {
        ...state,
        chinaMap: {
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_CHINAMAP_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        chinaMap: {
          result: result.data === undefined ? [] : result.data,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_CHINAMAP_ERROR: {
      return {
        ...state,
        chinaMap: {
          result: [],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_WORLDAMAP: {
      return {
        ...state,
        worldMap: {
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_WORLDAMAP_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        worldMap: {
          result: result.data === undefined ? [] : result.data,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_WORLDAMAP_ERROR: {
      return {
        ...state,
        worldMap: {
          result: [],
          loading: false,
          error: true
        }
      };
    }
    default:
      return state;
  }
};

export default { initialState, reducer };
