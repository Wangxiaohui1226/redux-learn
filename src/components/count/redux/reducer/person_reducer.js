import {ADDPERSON} from '../constant'
const initState=[{
    name:'wwww',
    age:20,
    
}]
export default function personReducer(preState,action) {
    const {type,data}=action
    console.log("打印了preState",preState)
    if(preState === undefined) preState=initState
    switch(type){
        case ADDPERSON :
            return [data,...preState];
            default:
                return preState
    }

}