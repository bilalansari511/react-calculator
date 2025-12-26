import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [data, setData] = useState("");

  function addValue(e) {
    setData(data + e.target.innerText);
  }

  function clearValue() {
    setData("");
  }

  function calculate() {
    setData(eval(data));
  }

  return (
    <>
      <h1>Calculator</h1>

      <div className="container">
        <input className="inputbtn" value={data} disabled />

        <div className="btn">
          <button onClick={clearValue}>C</button>
          <button onClick={addValue}>7</button>
          <button onClick={addValue}>8</button>
          <button onClick={addValue}>+</button>

          <button onClick={addValue}>4</button>
          <button onClick={addValue}>5</button>
          <button onClick={addValue}>6</button>
          <button onClick={addValue}>-</button>

          <button onClick={addValue}>1</button>
          <button onClick={addValue}>2</button>
          <button onClick={addValue}>3</button>
          <button onClick={addValue}>*</button>

          <button onClick={addValue}>00</button>
          <button onClick={addValue}>0</button>
          <button onClick={calculate}>=</button>
          <button onClick={addValue}>/</button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
