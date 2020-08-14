import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from "./Components/Forms_Login";

function App() {
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
        and learn FORMS!
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
