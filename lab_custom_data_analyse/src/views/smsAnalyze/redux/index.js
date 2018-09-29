import * as actionTypes from './actionType'

//定义初始状态
const initialState = {
 
  smsLanguageListData:{
    data: [],
    loading: false,
    error:false
  },
  appReceiveSMSFrequencyListData:{
    data: [],
    loading: false,
    error:false
  },
  appContaionsTargetListData:{
    data: [],
    loading: false,
    error:false
  }


};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.LOADING_SMSLANGUAGETOP:
      {
        return {
          ...state,
          smsLanguageListData:{
            data:[],
            loading: true,
            error:false
          },
        };
      }

    case actionTypes.LOADING_SMSLANGUAGETOP_SUCCESS:
      {
        let result = action.result;
        return {
          ...state,
          smsLanguageListData:{
            data: result.data,
            loading: false,
            error:false
          }
      }
    }

    case actionTypes.LOADING_SMSLANGUAGETOP_ERROR:
      return {
        ...state,
        smsLanguageListData:{
          data:[],
          loading: false,
          error: true
        }
      }

      case actionTypes.LOADING_APPRECEIVEFREQUENCY:
        {
          return {
            ...state,
            appReceiveSMSFrequencyListData:{
               data: [],
              loading: true,
              error:false
            },
          };
        }

      case actionTypes.LOADING_APPRECEIVEFREQUENCY_SUCCESS:
        {
          let result = action.result;
          return {
            ...state,
            appReceiveSMSFrequencyListData:{
              data: result,
              loading: false,
              error:false
            }
        }
      }

      case actionTypes.LOADING_APPRECEIVEFREQUENCY_ERROR:
        return {
          ...state,
          appReceiveSMSFrequencyListData:{
             data: [],
            loading: false,
            error: true
          }
        }

         case actionTypes.LOADING_APPCONTAINSTARGETMES:
        {
          return {
            ...state,
            appContaionsTargetListData:{
               data: [],
              loading: true,
              error:false
            },
          };
        }

      case actionTypes.LOADING_APPCONTAINSTARGETMES_SUCCESS:
        {
          let result = action.result;
          return {
            ...state,
            appContaionsTargetListData:{
              data: result,
              loading: false,
              error:false
            }
        }
      }

      case actionTypes.LOADING_APPCONTAINSTARGETMES_ERROR:
        return {
          ...state,
          appContaionsTargetListData:{
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