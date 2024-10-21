import React from 'react';
import logo from './assets/logo.svg';
import github from './assets/github.png';
import './App.css';
import HeaderNav from './header/HeaderNav';

function App() {
  return (
    <div className="App">
      <HeaderNav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Work In Progress
        </p>
        <a
          className="App-link"
          href="https://github.com/saj404/viewer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} className="github-logo" alt="github logo" width="50" />
        </a>
      </header>
    </div>
  );
}

export default App;
