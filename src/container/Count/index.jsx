// 引入count的UI组件
import  CountUI from '../../components/count';
import  {createDecrementAction, createIncrementAction,createIncrementAsyncAction} from '../../components/count/redux/action/count/count_action'

// 引入store
// import store from '../../components/count/redux/store'

// 引入connect 用于连接UI组件和redux
import { connect } from 'react-redux'

// mapStateToProps函数返回对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件的props的value --把状态给带过去
function mapStateToProps(state) {
     return  {
        count:state
     }
}
// mapDispatchToProps函数返回对象中的key就作为传递给ui组件的props的key，value 就作为传递给ui组件的props的value
function mapDispatchToProps(dispatch) {
    return {jia:(data)=>{
        // 通知redux执行加法
       dispatch(createIncrementAction(data))
    },

    jian:(data) =>{
        dispatch(createDecrementAction(data))
    
    },
    jiasync:(data)=>{
        dispatch(createIncrementAsyncAction(data))
    }
}


}
const Countcontainer=connect(
   state=>({ count:state}) ,// 箭头函数优化原来的写法  映射状态

   // 映射操作状态的方法 可以写成对象形式
   {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiasync:createIncrementAsyncAction
   }


)(CountUI) // 生成容器组件

export default Countcontainer // 把容器组件暴露出去
