
import {Component} from "react";
import  {connect} from 'react-redux'
import {createIncrementAction} from '../../components/count/redux/action/count/count_action'
// import Count from '../../components/count/index'

//  class Count extends Component {
 

//     render() {
//         return (
//             <div>总和:{this.props.jia}</div>
           
//         )
//     }
// }

class CountUI extends Component {
     handleAdd=()=>{
        this.props.jia(2)

        }
    render() {
        return (
            <div>总合 {this.props.count}
              <button onClick={this.handleAdd}>加</button>
            </div>
        )
    }

}
 export default connect(
    state=>({count:state}),  // 映射状态的对象
    {
        jia:createIncrementAction
    })(CountUI)