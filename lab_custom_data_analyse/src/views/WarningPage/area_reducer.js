const initialState = {
  worldDiffuse: {
    weekCountry: [],
    monthCountry: [],
    count: {
      week: {
        in: [],
        out: []
      },
      month: {
        in: [],
        out: []
      }
    },
    legend: [],
    change: [],
    loading: true,
    error: false
  },

  worldMap: {
    result: [],
    loading: true,
    error: false
  },

  chinaDiffuse: {
    weekProvince: [],
    monthProvince: [],
    count: {
      week: {
        in: [],
        out: []
      },
      month: {
        in: [],
        out: []
      }
    },
    legend: [],
    change: [],
    loading: true,
    error: false
  },

  chinaMap: {
    result: [],
    loading: true,
    error: false
  }
};

const LOAD_WARNING_WORLDDIFFUSE = "LOAD_WARNING_WORLDDIFFUSE";
const LOAD_WARNING_WORLDDIFFUSE_SUCCESS = "LOAD_WARNING_WORLDDIFFUSE_SUCCESS";
const LOAD_WARNING_WORLDDIFFUSE_ERROR = "LOAD_WARNING_WORLDDIFFUSE_ERROR";

const LOAD_WARNING_AREA_WORLDAMAP = "LOAD_WARNING_AREA_WORLDAMAP";
const LOAD_WARNING_AREA_WORLDAMAP_SUCCESS =
  "LOAD_WARNING_AREA_WORLDAMAP_SUCCESS";
const LOAD_WARNING_AREA_WORLDAMAP_ERROR = "LOAD_WARNING_AREA_WORLDAMAP_ERROR";

const LOAD_WARNING_CHINADIFFUSE = "LOAD_WARNING_CHINADIFFUSE";
const LOAD_WARNING_CHINADIFFUSE_SUCCESS = "LOAD_WARNING_CHINADIFFUSE_SUCCESS";
const LOAD_WARNING_CHINADIFFUSE_ERROR = "LOAD_WARNING_CHINADIFFUSE_ERROR";

const LOAD_WARNING_AREA_CHINAMAP = "LOAD_WARNING_AREA_CHINAMAP";
const LOAD_WARNING_AREA_CHINAMAP_SUCCESS = "LOAD_WARNING_AREA_CHINAMAP_SUCCESS";
const LOAD_WARNING_AREA_CHINAMAP_ERROR = "LOAD_WARNING_AREA_CHINAMAP_ERROR";

export function loadWarningWorldDiffuse(param) {
  return {
    type: LOAD_WARNING_WORLDDIFFUSE,
    url: "/mock/usc/mock-warning-world-diffuse.json",
    // url: "http://192.168.0.128:8080/alert/getInAndOutCount/world",
    param: param
  };
}

export function loadWarningAreaWorldMap(param) {
  return {
    type: LOAD_WARNING_AREA_WORLDAMAP,
    url: "/mock/usc/mock-warning-worldmap.json",
    // url: "http://192.168.0.128:8080/alert/targetSpread/world",
    param: param
  };
}

export function loadWarningChinaDiffuse(param) {
  return {
    type: LOAD_WARNING_CHINADIFFUSE,
    url: "/mock/usc/mock-warning-china-diffuse.json",
    // url: "http://192.168.0.128:8080/alert/getInAndOutCount/domestic",
    param: param
  };
}

export function loadWarningAreaChinaMap(param) {
  return {
    type: LOAD_WARNING_AREA_CHINAMAP,
    url: "/mock/usc/mock-warning-chinamap.json",
    // url: "http://192.168.0.128:8080/alert/targetSpread/domestic",
    param: param

  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WARNING_WORLDDIFFUSE: {
      return {
        ...state,
        worldDiffuse: {
          weekCountry: [],
          monthCountry: [],
          count: {
            week: {
              in: [],
              out: []
            },
            month: {
              in: [],
              out: []
            }
          },
          legend: [],
          change: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_WORLDDIFFUSE_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        worldDiffuse: {
          weekCountry:
            result.weekCountry === undefined ? [] : result.weekCountry,
          monthCountry:
            result.monthCountry === undefined ? [] : result.monthCountry,
          country: result.country === undefined ? [] : result.country,
          count: {
            week: {
              in:
                result.count.week.in === undefined ? [] : result.count.week.in,
              out:
                result.count.week.out === undefined ? [] : result.count.week.out
            },
            month: {
              in:
                result.count.month.in === undefined
                  ? []
                  : result.count.month.in,
              out:
                result.count.month.out === undefined
                  ? []
                  : result.count.month.out
            }
          },
          legend: result.legend === undefined ? [] : result.legend,
          change: result.change === undefined ? [] : result.change,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_WORLDDIFFUSE_ERROR: {
      return {
        ...state,
        worldDiffuse: {
          weekCountry: [],
          monthCountry: [],
          count: {
            week: {
              in: [],
              out: []
            },
            month: {
              in: [],
              out: []
            }
          },
          legend: [],
          change: [],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_AREA_WORLDAMAP: {
      return {
        ...state,
        worldMap: {
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_AREA_WORLDAMAP_SUCCESS: {
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
    case LOAD_WARNING_AREA_WORLDAMAP_ERROR: {
      return {
        ...state,
        worldMap: {
          result:[],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_CHINADIFFUSE: {
      return {
        ...state,
        chinaDiffuse: {
          weekProvince: [],
          monthProvince: [],
          count: {
            week: {
              in: [],
              out: []
            },
            month: {
              in: [],
              out: []
            }
          },
          legend: [],
          change: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_CHINADIFFUSE_SUCCESS: {
      let result = action.result;
      return {
        ...state,
        chinaDiffuse: {
          weekProvince:
            result.weekProvince === undefined ? [] : result.weekProvince,
          monthProvince:
            result.monthProvince === undefined ? [] : result.monthProvince,
          count: {
            week: {
              in:
                result.count.week.in === undefined ? [] : result.count.week.in,
              out:
                result.count.week.out === undefined ? [] : result.count.week.out
            },
            month: {
              in:
                result.count.month.in === undefined
                  ? []
                  : result.count.month.in,
              out:
                result.count.month.out === undefined
                  ? []
                  : result.count.month.out
            }
          },
          legend: result.legend === undefined ? [] : result.legend,
          change: result.change === undefined ? [] : result.change,
          loading: false,
          error: false
        }
      };
    }
    case LOAD_WARNING_CHINADIFFUSE_ERROR: {
      return {
        ...state,
        chinaDiffuse: {
          weekProvince: [],
          monthProvince: [],
          count: {
            week: {
              in: [],
              out: []
            },
            month: {
              in: [],
              out: []
            }
          },
          legend: [],
          change: [],
          loading: false,
          error: true
        }
      };
    }

    case LOAD_WARNING_AREA_CHINAMAP: {
      return {
        ...state,
        chinaMap: {
          result: [],
          loading: true,
          error: false
        }
      };
    }
    case LOAD_WARNING_AREA_CHINAMAP_SUCCESS: {
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
    case LOAD_WARNING_AREA_CHINAMAP_ERROR: {
      return {
        ...state,
        chinaMap: {
          result:[],
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
