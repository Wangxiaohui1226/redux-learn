/*
1.该文件是用于创建一个为count组件服务的reducer,reducer本质就是一个函数
2. reducer函数会接收2个参数，分别是：之前的状态prestate,动作对象action
*/ 
import {INCREMENT,DECREMENT} from './constant'
export default function countReducer (preState,action) {
    console.log("preState",preState)
    console.log("action",action)
    // 初始化
    if(preState===undefined) preState=0
  const {type,data}=action;
//   从action对象中获取type,data,根据type决定如何加工数据
  switch( type) {
    case INCREMENT:
        console.log("a")
       return preState+data;
    case DECREMENT:
        return preState-data;
    default: return preState;
  }
 }