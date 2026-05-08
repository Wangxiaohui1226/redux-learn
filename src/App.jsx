import React, { Component } from "react";
import Count from './container/Count'
import CountTest from "./container/CountTest";
import store from '././components/count/redux/store'

export default class App extends Component {
    render() {
        return (
            // <Count store={store}></Count>
            <CountTest store={store}></CountTest>
        )
    }
}