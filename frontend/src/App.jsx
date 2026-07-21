import { useState } from 'react'
import './App.css'

function App() {
//stases
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [result, setResult] = useState("")

//functions
async function add() {

  const response = await fetch(
    `http://localhost:3000/add/${number1}/${number2}`
  );

  const data = await response.text();

  setResult(data);
}


//functions
async function subtract() {

  const response = await fetch(
    `http://localhost:3000/subtract/${number1}/${number2}`
  );

  const data = await response.text();

  setResult(data);
}

//functions
async function multiply() {

  const response = await fetch(
    `http://localhost:3000/multiply/${number1}/${number2}`
  );

  const data = await response.text();

  setResult(data);
}

async function divide() {

  const response = await fetch(
    `http://localhost:3000/divide/${number1}/${number2}`
  );

  const data = await response.text();

  setResult(data);
}

  
 // UI  
  return (
  <div className="calculator">

    <h1>Calculator</h1>

    <label>First Number</label>

    <input
      type="number"
      value={number1}
      onChange={(e) => setNumber1(e.target.value)}
    />

    <label>Second Number</label>

    <input
      type="number"
      value={number2}
      onChange={(e) => setNumber2(e.target.value)}
    />

    <div className="buttons">

      <button onClick={add}>+</button>

      <button onClick={subtract}>-</button>

      <button onClick={multiply}>×</button>

      <button onClick={divide}>÷</button>

    </div>

    <div className="result">
      Result: {result}
    </div>

  </div>
)
    
}

export default App