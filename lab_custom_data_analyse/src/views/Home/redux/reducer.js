import * as actionTypes from './actionType.js'

//定义初始状态
export const initialState = {
  //信令统计数量初始化
  signchartdata:{
    data: [],
    loading: true,
    error:false
  },
  dragLineChartData:{
    data:[],
    loading:true,
    error:false
  }
};

/* 定义reducer*/
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 信令数量统计
    case actionTypes.LOAD_SIGNCOUNT:
      {
        return {
          ...state,
          signchartdata:{
            data: [],
            loading: true,
            error:false
          }
        };
      }

    case actionTypes.LOAD_SIGNCOUNT_SUCCESS:
      {
        let result = action.result;
        return {
          ...state,
          signchartdata:{
            data: result,
            loading: false,
            error:false
          }
      }
    }

    case actionTypes.LOAD_SIGNCOUNT_ERROR:
      {
        return {
          ...state,
          signchartdata:{
            loading: false,
            error: true
          }
        }
      }


// 数据清洗
   case actionTypes.LOAD_DATACLEAN:
   {
     return{
       ...state,
       dragLineChartData:{
         data:[],
         loading:true,
         error:false
       }
     }
   }

   case actionTypes.LOAD_DATACLEAN_SUCCESS:
     {
         let result=action.result;
         return{
           ...state,
           dragLineChartData:{
             data:result,
             loading:false,
             error:false
         }
       }
     }
  case actionTypes.LOAD_DATACLEAN_ERROR:
  {
    return{
      ...state,
      dragLineChartData:{
        data:[],
        loading:false,
        error:true
      }
    }
  }

    default:
      return state;
  }
};
