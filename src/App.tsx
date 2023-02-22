import { useState } from "react";
import { concatNumber, clearNumber, deleteNumber, showResult } from "./controllers/changeVisor";
import "./components/pad.css";
import "./components/visor.css";
import "./app.css";




function App() {
  const [number, setNumber] = useState("0");
  const [fixedNumber, setFixedNumber] = useState("");
  const [operation, setOperation] = useState("");

  const numButtonEvent = (param: string) => {
    setNumber(concatNumber(number, param));
  }

  const clearButtonEvent = () => {
    setNumber(clearNumber(number));
    setOperation("");
    setFixedNumber("");
  }

  const deleteButtonEvent = () => {
    setNumber(deleteNumber(number));
  }

  const operationButtonEvent = (op: string) => {
    setOperation(op);
    if (number !== "0") {
      setFixedNumber(number);
    }
    setNumber("0");
    if (fixedNumber !== "") {
      setFixedNumber(showResult(operation, number, fixedNumber));
    }
  }

  const equalButtonEvent = () => {
    setNumber(showResult(operation, number, fixedNumber));
    setFixedNumber("");
    setOperation("");
  }

  const dotButtonEvent = () => {
    if (!number.split("").includes(".")) {
      setNumber(concatNumber(number, "."));
    }
  }

  return (
    <div className="app">
      <div className="visor">
        <section className="fixed">{fixedNumber}</section>
        <section>{operation}{number}</section>
      </div>
      <div className="pad">
        <button onClick={() => clearButtonEvent()} id="clear" className="operation-button">Clear</button>
        <button onClick={() => deleteButtonEvent()} className="operation-button">C</button>
        <button onClick={() => operationButtonEvent("+")} className="operation-button">+</button>

        <button onClick={() => numButtonEvent("7")}>7</button>
        <button onClick={() => numButtonEvent("8")}>8</button>
        <button onClick={() => numButtonEvent("9")}>9</button>
        <button onClick={() => operationButtonEvent("-")} className="operation-button">-</button>

        <button onClick={() => numButtonEvent("4")}>4</button>
        <button onClick={() => numButtonEvent("5")}>5</button>
        <button onClick={() => numButtonEvent("6")}>6</button>
        <button onClick={() => operationButtonEvent("x")} className="operation-button">x</button>

        <button onClick={() => numButtonEvent("1")}>1</button>
        <button onClick={() => numButtonEvent("2")}>2</button>
        <button onClick={() => numButtonEvent("3")}>3</button>
        <button onClick={() => operationButtonEvent("/")} className="operation-button">/</button>

        <button onClick={() => numButtonEvent("0")}>0</button>
        <button onClick={() => dotButtonEvent()}>.</button>
        <button onClick={() => equalButtonEvent()} id="equal" className="operation-button">=</button>
      </div>
    </div>//app-div

  )
}
export default App
