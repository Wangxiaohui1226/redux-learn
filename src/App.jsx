import React, { Component } from "react";
import Count from './container/Count'
import CountTest from "./container/CountTest";
import Person from "./container/Person";

import store from '././components/count/redux/store'

export default class App extends Component {
    render() {
        return (
          
            <div>
                  <Count ></Count>
                  <Person ></Person>
            </div>
        )
    }
}