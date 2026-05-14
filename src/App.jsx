import React, { Component } from "react";
import Count from './container/Count'
import CountTest from "./container/CountTest";
import Person from "./container/Person";

import store from '././components/count/redux/store'
// import Demo from "./container/Demo";
// import Father from "./container/Demo1/Father";
// import Father from "./container/refDemo";

import Demo from './container/Demo'
export default class App extends Component {
    render() {
        return (
          
            <div>
                  {/* <Count ></Count>
                  <Person ></Person> */}
                  <Demo ></Demo>
                  {/* <Father ></Father> */}
            </div>
        )
    }
}