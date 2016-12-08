import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameBoard from './GameBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Guac-a-mole!</h2>
        </div>
        <GameBoard />
      </div>
    );
  }
}

export default App;
