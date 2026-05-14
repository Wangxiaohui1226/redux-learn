
import {useShareContext} from './shareContext'
 
const A =()=>{
 const {sharedState, setSharedState}=useShareContext()
    return (
       <div>
         这个是A组件:获取state的值
        {sharedState}

        <button onClick={()=>{
            setSharedState(3)
        }}>修改stateA</button>
       </div>
    )
}

export  default A