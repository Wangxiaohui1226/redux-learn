import FuncyInput from "./FuncyInput"
import { useEffect, useRef, } from "react"



const Father=()=>{
    const inputRef= useRef(null)
    useEffect(()=>{
        console.log("打印了ref",inputRef.current.focus())

    },[])
    return (
        <div>

            <FuncyInput ref={inputRef}/>
            <input  ></input>
        </div>
    )
}

export default Father