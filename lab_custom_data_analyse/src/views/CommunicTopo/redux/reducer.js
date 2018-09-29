import * as actionTypes from './actionTypes'

//定义初始状态
export const initialState = {
  //拓扑状态参数
  topology:{
    data: [],
    links:[],
    loading: true,
    error:false
  },
  //通信表参数
  communication: {
    total: 0,
    result: [],
    loading: true,
    error:false
  },
};

/* 定义reducer, 每个组件只有一个reducer */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_TOPOLOGY:
      {
        return {
          ...state,
          topology:{
            data:[],
            links:[],
            loading: true,
            error:false
          },
        };
      }

    case actionTypes.LOAD_TOPOLOGY_SUCCESS:
      {
        let result = action.result;
        return {
          ...state,
          topology:{
            data: result.data,
            links: result.links,
            loading: false,
            error:false
          }
      }
    }

    case actionTypes.LOAD_TOPOLOGY_ERROR:
      return {
        ...state,
        topology:{
          loading: false,
          error: true
        }
      }

      case actionTypes.LOAD_COMMUNICATION:
        {
          return {
            ...state,
            communication:{
              total:0,
              result: [],
              loading: true,
              error:false
            },
          };
        }

      case actionTypes.LOAD_COMMUNICATION_SUCCESS:
        {
          let result = action.result;
          return {
            ...state,
            communication:{
              total: result.total,
              result: result.data,
              loading: false,
              error:false
            }
        }
      }

      case actionTypes.LOAD_COMMUNICATION_ERROR:
        return {
          ...state,
          communication:{
            loading: false,
            error: true
          }
        }

    default:
      return state;
  }
};
