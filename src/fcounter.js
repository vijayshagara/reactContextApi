import React,{useContext} from "react";
import ClassOne from "./c1counter";
import { DataContext } from "./context";


function Fun(){
    const ConsumedAppValue = useContext(DataContext)
    return(
        <>
        <h1>fcounter</h1>
        <h3>intialvalue : {ConsumedAppValue.IntialValueFromProvider}</h3>
        <button onClick={ConsumedAppValue.handleIncrementFromProvider}>increase</button>&nbsp;
        <button onClick={ConsumedAppValue.handleDecrementFromProvider}>decrease</button>&nbsp;
        <button onClick={ConsumedAppValue.handleResetFromProvider}>reset</button>&nbsp;
        <hr/>
        <ClassOne/>
        </>
    )
}
export default Fun;