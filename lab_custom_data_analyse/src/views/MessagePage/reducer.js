const initialState = {
    list: {
        data:[],
        loading: true,
        error: false,
        total: 0
    },
};

const LOAD_FILTER_MESSAGE = "LOAD_FILTER_MESSAGE";
const LOAD_FILTER_MESSAGE_SUCCESS = "LOAD_FILTER_MESSAGE_SUCCESS";
const LOAD_FILTER_MESSAGE_ERROR = "LOAD_FILTER_MESSAGE_ERROR";




export function loadFilterData(param) {
    return{
        type: LOAD_FILTER_MESSAGE,
        url:"http://192.168.0.147:8080/message/query",
        // url: "/mock/usc/mock-current-message.json",
        param: param
    };
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_FILTER_MESSAGE: {
            return {
                ...state,
                list: {
                    data:[],
                    total: 0,
                    loading: true,
                    error: false,
                }
            };
        }
        case LOAD_FILTER_MESSAGE_SUCCESS: {
            let result = action.result;
            return {
                ...state,
                list: {
                    data:result.data,
                    total: result.total,
                    loading: false,
                    error: false,
                }
            };
        }
        case LOAD_FILTER_MESSAGE_ERROR: {
            return {
                ...state,
                list: {
                    loading: false,
                    error: true,
                }
            };
        }

        default:
            return state;
    }
};

export default { initialState, reducer };
