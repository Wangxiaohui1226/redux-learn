import React,{createContext,useContext,useState} from  'react'
const shareContext=createContext();

export function  useShareContext() {
    console.log("打印了context",shareContext,useContext(shareContext))
    return useContext(shareContext)
}

 export function ShareProvider({children}) {
    const [sharedState,setSharedState]=useState(0);

    const value={sharedState,setSharedState,name:"abc"}
    return <shareContext.Provider value={value}>{children}</shareContext.Provider>  // 给父组件使用 

 }
 