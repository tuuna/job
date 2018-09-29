// import * as actionTypes from './actionTypes'

//定义初始状态
const initialState = {
  searchWay:"middlePerson",
  targetAnalayzeListdata:{
    data: [],
    loading: false,
    error:false
  },
  middlePersonListdata:{
    data: [],
    loading: false,
    error:false
  },


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHWAY':
        return {
          ...state,
          searchWay:action.searchWay
        };

    case 'LOADING_MIDDLEPERSON':
      {
        return {
          ...state,
          middlePersonListdata:{
            data:[],
            loading: true,
            error:false
          },
        };
      }

    case 'LOADING_MIDDLEPERSON_SUCCESS':
      {
        let result = action.result;
        return {
          ...state,
          middlePersonListdata:{
            data: result.data,
            loading: false,
            error:false
          }
      }
    }

    case 'LOADING_MIDDLEPERSON_ERROR':
      return {
        ...state,
        middlePersonListdata:{
          data:[],
          loading: false,
          error: true
        }
      }

      case 'LOADING_TARGETLIST':
        {
          return {
            ...state,
            targetAnalayzeListdata:{
               data: [],
              loading: true,
              error:false
            },
          };
        }

      case 'LOADING_TARGETLIST_SUCCESS':
        {
          let result = action.result;
          return {
            ...state,
            targetAnalayzeListdata:{
              data: result,
              loading: false,
              error:false
            }
        }
      }

      case 'LOADING_TARGETLIST_ERROR':
        return {
          ...state,
          targetAnalayzeListdata:{
             data: [],
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