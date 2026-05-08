import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less'
import App from './App'
import store from './components/count/redux/store'
import { Provider} from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));

// 检测redux中状态的改变 若redux中的状态发生了改变 重新渲染app组件
// store.dispatch(()=>{
root.render(
   <Provider store={store}>
      <App />
   </Provider>
);
// })



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

