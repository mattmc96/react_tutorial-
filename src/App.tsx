import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppHeader, { AppHeaderProps } from './containers/AppHeader';

// Build an instance of our AppHeaderProps to pass to the AppHeader component
const headerProps: AppHeaderProps = {
  title: "My Dive Log",
  description: "Log, Track, Review your dive logs and relive the experience",
  links: [
    {
      label: "Logs",
      route: "/logs/list"
    },
    {
      label: "New Entry",
      route: "/logs/create"
    }
  ]
};

const App: React.FC = () => {
  return (
    <main className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
