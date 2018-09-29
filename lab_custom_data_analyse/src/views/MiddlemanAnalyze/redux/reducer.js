import * as actionTypes from './actionTypes'

//定义初始状态
export const initialState = {
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

/* 定义reducer, 每个组件只有一个reducer */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_SIGNALLING:
      {
        return {
          ...state,
          table_status: {
            loading: true,
            error: false
          }
        };
      }

    case actionTypes.LOAD_SIGNALLING_SUCCESS:
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

    case actionTypes.LOAD_SIGNALLING_ERROR:
      {
        return {
          ...state,
          table_status: {
            loading: false,
            error: true
          }
        };
      }

    case actionTypes.LOAD_DETAIL:
      {
        return {
          ...state,
          table_status: {
            loading: true,
            error: false
          }
        };
      }

    case actionTypes.LOAD_DETAIL_SUCCESS:
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

    case actionTypes.LOAD_DETAIL_ERROR:
      {
        return {
          ...state,
          detail_status: {
            loading: false,
            error: true
          }
        };
      }

    case actionTypes.CLOSE_DETAIL:
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
