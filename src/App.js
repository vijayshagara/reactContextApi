import React, { useState }
  from "react";
import { DataContext } from "./context";
import Fun from "./fcounter";



function App() {
  const [intialvalue, setIntialValue] = useState(5);
  const handleIncrement = () => {
    setIntialValue(intialvalue + 1);
  };
  const handleDecreament = () => {
    setIntialValue(intialvalue - 1);
  };
  const handleReset = () => {
    setIntialValue(5);
  };
  
  return (
    <div>
      <h1>this is parent</h1>
      <h4>intialvalue : {intialvalue}</h4>
      <button onClick={handleIncrement}>increase</button>&nbsp;
      <button onClick={handleDecreament}>decrease</button>&nbsp;
      <button onClick={handleReset}>reset</button>&nbsp;
      <hr />
      <DataContext.Provider
        value={{
          IntialValueFromProvider: intialvalue,
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecreament,
          handleResetFromProvider: handleReset,
        }}
      >
        <Fun />
      </DataContext.Provider>

    </div>
  );
}

export default App;
