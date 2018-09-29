//定义初始状态
const initialState = {
  //状态参数
  table_status: {
    loading: true,
    error: false
  },
  detail_status: {
    modalVisible: false,
    loading: true,
    error: false
  },
  //查询结果
  total: 0,
  result: [],
  detail_result: []
};

//定义信令检索的三个查询状态   actiontypes
const LOAD_SIGNALLING = 'LOAD_SIGNALLING';
const LOAD_SIGNALLING_SUCCESS = 'LOAD_SIGNALLING_SUCCESS';
const LOAD_SIGNALLING_ERROR = 'LOAD_SIGNALLING_ERROR';

const LOAD_DETAIL = 'LOAD_DETAIL';
const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
const LOAD_DETAIL_ERROR = 'LOAD_DETAIL_ERROR';
const CLOSE_DETAIL = 'CLOSE_DETAIL'

//定义信令检索的action
export function loadSignalling(param) {
  return {
    type: LOAD_SIGNALLING, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/mock-table.json',
    param: param
  };
}

export function loadDetail(param) {
  return {type: LOAD_DETAIL, url: '/mock/mock-detail.json', param: param};
}

export function closeDetail() {
  return {type: CLOSE_DETAIL};
}

/* 定义reducer, 每个组件只有一个reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SIGNALLING:
      {
        return {
          ...state,
          table_status: {
            loading: true,
            error: false
          }
        };
      }

    case LOAD_SIGNALLING_SUCCESS:
      {
        let result = action.result;
        return {
          ...state,
          table_status: {
            loading: false,
            error: false
          },
          total: result.total,
          result: result.data
        };
      }

    case LOAD_SIGNALLING_ERROR:
      {
        return {
          ...state,
          table_status: {
            loading: false,
            error: true
          }
        };
      }

    case LOAD_DETAIL:
      {
        return {
          ...state,
          table_status: {
            loading: true,
            error: false
          }
        };
      }

    case LOAD_DETAIL_SUCCESS:
      {
        let result = action.result;
        return {
          ...state,
          detail_status: {
            loading: false,
            error: false,
            modalVisible: true
          },
          detail_result: result.data
        };
      }

    case LOAD_DETAIL_ERROR:
      {
        return {
          ...state,
          detail_status: {
            loading: false,
            error: true
          }
        };
      }

    case CLOSE_DETAIL:
      {
        return {
          ...state,
          detail_status: {
            modalVisible: false
          }
        };
      }

    default:
      return state;
  }
};

/* 导出的字段名称固定, 方便后续的store去处理 */
export default {initialState, reducer};
