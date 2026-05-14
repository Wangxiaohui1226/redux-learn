import React, {  Component, useState } from 'react';
// import A from './A';
// import B from './B'
// // 创建一个Context
// import { ShareProvider } from './shareContext';

class  Child extends Component{
constructor(props) {
  super()
  this.state={
    name:"www",
    count:"0"
  }
}
// eslint-disable-next-line react/no-typos
static  getDerivedStateFromProps (val) {
  console.log("执行了",val)
  return val 
}
componentDidUpdate() {
  console.log("state",this.state)
}
 render() {
  return(
    <div>
        {this.props.count}
    </div>
  )
 }
}


export default function Demo() {
  const [count,setCount] =useState(0)


  return (
    // <ShareProvider >
    //     <A />
    //     <B />

    // </ShareProvider>
    <div>
     
      <button onClick={()=>{
       setCount(count+1)
      }}>修改 {count}</button>

      <Child count={count}></Child>
    </div>
  );
}
