import React, { useEffect, useState } from "react";
import logo from './logo.svg';

import './App.css';

function App() {

  const [hello, setHello] = useState(null);

  useEffect(() => {
    fetch('/api/hello-world')
      .then(res => res.json())
      .then(
        (result) => {
          console.log("result");
          console.log(result);
          console.log(JSON.stringify(result));
          setHello(result.hello + ' ' + result.world);
        },
        (error) => {
          setHello(JSON.stringify(error));
        }
      )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{hello}</p>
      </header>
    </div>
  );
}

export default App;
