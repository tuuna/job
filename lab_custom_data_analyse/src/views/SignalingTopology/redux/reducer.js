import * as actionTypes from './actionTypes.js';

//定义初始状态
export const initialState = {
  //拓扑状态参数
  topology:{
    data: [],
    links:[],
    loading: true,
    error:false
  },
  // 信令点基本信息表格数据
  signBasicsTable:{
    result:[],
    total:0,
    loading:true,
    error:false,
  }
  // 搜索条件初始化
  

};

/* reducer */
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 信令拓扑数据
    case actionTypes.LOAD_SIGNTOPOLOGY:
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

    case actionTypes.LOAD_SIGNTOPOLOGY_SUCCESS:
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

    case actionTypes.LOAD_SIGNTOPOLOGY_ERROR:
    {
      return {
        ...state,
        topology:{
          loading: false,
          error: true
        }
      }
    }
  // 信令拓扑表格数据
    case actionTypes.LOAD_SIGNBASICSTABLE:
    {
      return{
        ...state,
        signBasicsTable:{
          result:[],
          total:0,
          loading:false,
          error:false,
        }
      }
    }
    case actionTypes.LOAD_SIGNBASICSTABLE_SUCCESS:
    {
      let result =action.result;
      return{
        ...state,
        signBasicsTable:{
          result:result.data,
          total:result.total,
          loading:false,
          error:false,
        }
      }
    }
    case actionTypes.LOAD_SIGNBASICSTABLE_ERROR:
    {
      return{
        ...state,
        signBasicsTable:{
          loading:false,
          error:false,
        }
      }
    }

    default:
      return state;
  }
};
