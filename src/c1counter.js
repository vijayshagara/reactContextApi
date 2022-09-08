import React, { Component } from "react";
import { DataContext } from "./context";
import ClassTwo from "./c2counter";

 class ClassOne extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <DataContext.Consumer>
            {(value) => {
                return(
                    <>
                    <h1>class</h1>
                    <h3>intialvalue : {value.IntialValueFromProvider}</h3>
                    <button onClick={value.handleIncrementFromProvider}>increase</button>&nbsp;
                    <button onClick={value.handleDecrementFromProvider}>decrease</button>&nbsp;
                     <button onClick={value.handleResetFromProvider}>reset</button>&nbsp;
                     <hr/>
                     <ClassTwo/>
                    </>
                );
            }}
           
            </DataContext.Consumer>
        );
    }
}

export default ClassOne;
