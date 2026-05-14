 import React ,{Component, PureComponent}from "react";
// class Child extends Component{
//     render() {
//         console.log("child 重新渲染")
//         return (
//             <div>{this.props.name}</div>
//         )
//     }

// }
class Child extends PureComponent{
    render() {
        console.log("child 重新渲染")
        return (
            <div>{this.props.name}</div>
        )
    }

}


class Father extends Component {
    state={
        count:0,
        name:"zs"
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>修改</button>
                <div>{this.state.count}</div>
                <Child name={this.state.name}></Child>
            </div>
        )
    }
}
export default Father