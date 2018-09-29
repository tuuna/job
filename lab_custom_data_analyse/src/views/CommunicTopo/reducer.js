//定义初始状态
const initialState = {
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

//定义信令检索的三个查询状态   actiontypes
const LOAD_TOPOLOGY = 'LOAD_TOPOLOGY';
const LOAD_TOPOLOGY_SUCCESS = 'LOAD_TOPOLOGY_SUCCESS';
const LOAD_TOPOLOGY_ERROR = 'LOAD_TOPOLOGY_ERROR';

const LOAD_COMMUNICATION = 'LOAD_COMMUNICATION';
const LOAD_COMMUNICATION_SUCCESS = 'LOAD_COMMUNICATION_SUCCESS';
const LOAD_COMMUNICATION_ERROR = 'LOAD_COMMUNICATION_ERROR';


//定义信令检索的action
export function loadTopology(param) {
  return {
    type: LOAD_TOPOLOGY, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/mock-topo.json',
    param: param
  };
}

export function loadCommunication(param) {
  return {
    type: LOAD_COMMUNICATION, //LOAD_SIGNALLING_SUCCESS, LOAD_SIGNALLING_ERROR],
    url: '/mock/mock-commu.json',
    param: param
  };
}

/* 定义reducer, 每个组件只有一个reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOPOLOGY:
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

    case LOAD_TOPOLOGY_SUCCESS:
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

    case LOAD_TOPOLOGY_ERROR:
      return {
        ...state,
        topology:{
          loading: false,
          error: true
        }
      }

      case LOAD_COMMUNICATION:
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

      case LOAD_COMMUNICATION_SUCCESS:
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

      case LOAD_COMMUNICATION_ERROR:
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

/* 导出的字段名称固定, 方便后续的store去处理 */
export default {initialState, reducer};
