import React, { Component } from "react";
import { DataContext } from "./context";

class ClassTwo extends Component {
    static contextType = DataContext
    constructor() {
        super();
    }
    render() {
        //console.log(this.context);
        return (
            <>
                <h1>class 2</h1>
                <h3>intialvalue : {this.context.IntialValueFromProvider}</h3>
                <button onClick={this.context.handleIncrementFromProvider}>increase</button>&nbsp;
                <button onClick={this.context.handleDecrementFromProvider}>decrease</button>&nbsp;
                <button onClick={this.context.handleResetFromProvider}>reset</button>&nbsp;
            </>
        );
    }
}

export default ClassTwo;
