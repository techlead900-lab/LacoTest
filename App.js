import logo from './logo.svg';
import './App.css';
import './index.css';

import React, { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDncrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <button className="bg-blue-500 text-white p-2 rounded m-2" onClick={handleDncrement}>Decrement</button>
      <button className="bg-blue-500 text-white p-2 rounded m-2" onClick={handleIncrement}>Increment</button>
    </div>

  );
}

export default App;
