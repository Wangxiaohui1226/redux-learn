
import  React,{Component} from 'react'
import {Select} from 'antd'


export default class Count extends Component {
    constructor(props) {
        super()
     this.state={
        count:0,
        selectNumber:0
     }
     console.log("打印了",props)
    }
    componentDidMount() {
        //检测redux中状态的变化，只要变化，就调用render，用于订阅

    }
    
    handleAdd=()=> {
        const {selectNumber}=this.state
        this.props.jia(Number(selectNumber))
      
    }
   decrement=()=>{
     const {selectNumber}=this.state
    this.props.jian(Number(selectNumber))
     
       
   }
   addIfOdd=()=>{
     const {selectNumber}=this.state
     if(this.props.count %2!==0) {
         this.props.jia(Number(selectNumber))
     }


   }
    addIfAsync=()=>{
          const {selectNumber}=this.state
          this.props.jiasync(Number(selectNumber))
     
   }
    render() {
        return (
            <div>
                <h1>
                    当前求和为:{this.props.count}

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

                <div>人数: {this.props.renshu}</div>
            </div>
        )
    }
}