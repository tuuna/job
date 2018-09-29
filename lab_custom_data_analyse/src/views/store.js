import {createStore, compose, applyMiddleware} from 'redux';
import DevTools from './DevTools';
import createSagaMiddleware from 'redux-saga'
import RootSaga from './RootSaga'
import {reducers,initState} from './reducer'

// 组合中间件   使用comose函数
const sagaMiddleware = createSagaMiddleware()
const middleware = compose(applyMiddleware(sagaMiddleware), DevTools.instrument())

//组合最终的store
const store = createStore(reducers, initState, middleware);

sagaMiddleware.run(RootSaga)
export default store;
// export default store;
