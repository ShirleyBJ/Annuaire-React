import logo from './logo.svg';
import './App.css';
import Recherche from './components/Recherche.js';
//import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>ANNUAIRE des établissements publics de l'administration 📖</h1>
        <Recherche/>
      </header>
    </div>
  );
}

export default App;
