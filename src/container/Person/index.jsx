import React, { Component } from 'react'
import { createAddPersonAction} from '../../components/count/redux/action/person/person_action'
import { connect } from 'react-redux'
 class Person extends Component {
    constructor(props) {
        super(props)
        this.state={}
        console.log("打印了person",props)
    }
    addPerson=()=>{
    //   createAddPersonAction({name:this.nameNode.value,age:this.ageNode.value})
    this.props.addPerson({name:this.nameNode.value,age:this.ageNode.value})
    }
  render() {
    return (
      <div>
         <input ref={c=>this.nameNode=c} type="text" placeholder='请输入名字'/>
         <input ref={c=>this.ageNode=c} type="text" placeholder='请输入年龄'/>
         <button onClick={this.addPerson}>添加</button>
         <ul>
                {
                    this.props.person.map((p)=>{
                        return <li key={p.id}>{p.name}--{p.age}</li>
                    })
                }
         </ul>
      </div>
    )
  }
}

export default connect(
    state=>({person:state.person}),
    
    {
        addPerson:createAddPersonAction
    }

)(Person)