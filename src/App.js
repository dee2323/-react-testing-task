import React, { useState } from 'react';
import './App.css'
import ToDoList from './components/ToDoList';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 style={{ margin: 'auto' }}>{counter}</h1>
      <h2>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{ marginRight: "1rem" }}
        >
          +
        </button>
        <button onClick={() => setCounter(counter - 1)}>-</button>
      </h2>
    </div>
  );
}

export default App;
