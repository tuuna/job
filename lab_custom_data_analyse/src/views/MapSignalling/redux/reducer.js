import * as actionTypes from './actionTypes'

//定义初始状态
export const initialState = {
  piechart:{
    data: [],
    loading: true,
    error:false
  },
  signlist:{
    data: [],
    loading: true,
    error:false
  },
  linechart:{
    data: [],
    loading: true,
    error:false
  },
  linetop:{
    data: [],
    loading: true,
    error:false
  },
  analazydata:{
    data: [],
    loading: true,
    error:false
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    //饼图
    case actionTypes.LOAD_PIECHART:
      {
        return {
          ...state,
          piechart:{
            data: [],
            loading: true,
            error:false
          }
        };
      }

    case actionTypes.LOAD_PIECHART_SUCCESS:
      {
        let result = action.result;
        console.info(result)
        return {
          ...state,
          piechart:{
            data: result,
            loading: false,
            error:false
          }
      }
    }

    case actionTypes.LOAD_PIECHART_ERROR:
      return {
        ...state,
        piechart:{
          loading: false,
          error: true
        }
      }

     //信令类型及数量统计
      case actionTypes.LOAD_SIGNLIST:
        {
          return {
            ...state,
            signlist:{
              data: [],
              loading: true,
              error:false
            }
          };
        }

      case actionTypes.LOAD_SIGNLIST_SUCCESS:
        {
          let result = action.result;
          console.info(result)
          return {
            ...state,
            signlist:{
              data: result,
              loading: false,
              error:false
            }
        }
      }

      case actionTypes.LOAD_SIGNLIST_ERROR:
        return {
          ...state,
          signlist:{
            loading: false,
            error: true
          }
        }

        //趋势统计
         case actionTypes.LOAD_LINECHART:
           {
             return {
               ...state,
               linechart:{
                 data: [],
                 loading: true,
                 error:false
               }
             };
           }

         case actionTypes.LOAD_LINECHART_SUCCESS:
           {
             let result = action.result;
             console.info(result)
             return {
               ...state,
               linechart:{
                 data: result,
                 loading: false,
                 error:false
               }
           }
         }

         case actionTypes.LOAD_LINECHART_ERROR:
           return {
             ...state,
             linechart:{
               loading: false,
               error: true
             }
           }

           //top统计
            case actionTypes.LOAD_LINETOP:
              {
                return {
                  ...state,
                  linetop:{
                    data: [],
                    loading: true,
                    error:false
                  }
                };
              }

            case actionTypes.LOAD_LINETOP_SUCCESS:
              {
                let result = action.result;
                console.info(result)
                return {
                  ...state,
                  linetop:{
                    data: result,
                    loading: false,
                    error:false
                  }
              }
            }

            case actionTypes.LOAD_LINETOP_ERROR:
              return {
                ...state,
                linetop:{
                  loading: false,
                  error: true
                }
              }


              //F分析
               case actionTypes.LOAD_ANALAZYDATA:
                 {
                   return {
                     ...state,
                     analazydata:{
                       data: [],
                       loading: true,
                       error:false
                     }
                   };
                 }

               case actionTypes.LOAD_ANALAZYDATA_SUCCESS:
                 {
                   let result = action.result;
                   console.info(result)
                   return {
                     ...state,
                     analazydata:{
                       data: result,
                       loading: false,
                       error:false
                     }
                 }
               }

               case actionTypes.LOAD_ANALAZYDATA_ERROR:
                 return {
                   ...state,
                   analazydata:{
                     loading: false,
                     error: true
                   }
                 }


    default:
      return state;
  }
};

// /* 导出的字段名称固定, 方便后续的store去处理 */
// export default {initialState, reducer};
