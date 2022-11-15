import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <div>
        <label htmlFor="email">Enter your name: </label>
        <input id="email" type="email"  />
      </div>
    </div>
  );
}

export default App;
