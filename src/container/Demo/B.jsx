import {useShareContext} from './shareContext'
const B=()=>{
    const {sharedState, setSharedState}=useShareContext()
    return (
        <div>
            这个B 组件 
            获取state的值 {sharedState}


            <button onClick={()=>{
                setSharedState(sharedState=>sharedState+1)
            }}> 修改state</button>
        </div>
    )
}

export default B