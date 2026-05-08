
import  React,{Component} from 'react'
import {Select} from 'antd'
import store from './redux/store'
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../components/count/redux/count_action'


export default class Count extends Component {
    constructor() {
        super()
     this.state={
        count:0,
        selectNumber:0
     }
    }
    componentDidMount() {
        //检测redux中状态的变化，只要变化，就调用render，用于订阅
        store.subscribe(()=>{
            this.setState({})
            
        })

    }
    
    handleAdd=()=> {
        const {selectNumber}=this.state
        store.dispatch(createIncrementAction(Number(selectNumber)))
    }
   decrement=()=>{
     const {selectNumber}=this.state
        
        store.dispatch(createDecrementAction(Number(selectNumber)))
       
   }
   addIfOdd=()=>{
     const {selectNumber}=this.state
     const count=store.getState()
     if(count%2!==0) {
        store.dispatch(createIncrementAction(Number(selectNumber)))
     }

   }
    addIfAsync=()=>{
          const {selectNumber}=this.state
     store.dispatch(createIncrementAsyncAction(Number(selectNumber),500))
     
   }
    render() {
        return (
            <div>
                <h1>
                    当前求和为:{store.getState()}

                </h1>
                <Select vlaue={this.state.selectNumber} onChange={(e)=>{
                    this.setState({
                        selectNumber:e
                    })
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </Select>
                <button onClick={this.handleAdd}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.addIfOdd}>当前求和为奇数再加</button>
                <button onClick={this.addIfAsync}>异步加</button>
            </div>
        )
    }
}