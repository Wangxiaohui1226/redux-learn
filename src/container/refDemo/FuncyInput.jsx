import React, { forwardRef ,useImperativeHandle,useRef} from 'react';


const handleClick=(val) =>{
    console.log("dayinlem ",val.target.value)
}
const  FuncyInput=forwardRef((props,ref)=>{
    
const inREF=useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => inREF.current?.focus()
  }), []);
    return <input ref={inREF}  onChange={handleClick} />
})

export default FuncyInput