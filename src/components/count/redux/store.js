/*
 该文件专门用于暴露一个store对象 ，整个应用只有一个store对象

*/


// createStore用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'

// 引入为count组件服务的reducer
import countReducer  from './reducer/count_reducer'
import personReducer from './reducer/person_reducer'

// 引入redux-thunk，用于支持异步action 传给store reducer不能单独一个个的传递 需要合并成一个总的reducer
import {combineReducers} from 'redux'
import {thunk} from 'redux-thunk'
const allReducer=combineReducers({
    count:countReducer,
    person:personReducer
})




const store=createStore(allReducer,applyMiddleware(thunk))
// 暴露store
export default store