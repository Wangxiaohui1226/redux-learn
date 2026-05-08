/**
 * 该文件专门为count组件生成action对象
 * 
 */
import {INCREMENT,DECREMENT} from '../../constant'
import store from '../../store'

// 同步action就是指action的值为object类型的一般对象
export  function createIncrementAction(data) {
    return {type:INCREMENT,data:data}
}

export  function createDecrementAction(data) {
    return {type:DECREMENT,data}
}

// 创建一个异步action，所谓的异步action就是指action的值为函数
export  function createIncrementAsyncAction(data,time) {
    return  ()=>{
        setTimeout(()=>{
        store.dispatch(createIncrementAction(data))
        },time)
        
    }

}