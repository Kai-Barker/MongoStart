import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import CreateUser from './Pages/CreateUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateUser />
      </header>
    </div>
  );
}

export default App;
