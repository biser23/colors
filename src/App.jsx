import './App.css'
import React from 'react';
import MyFormChallenge from './components/MyFormChallenge';

const App = () => {
  return (
    <div className="app-container">
      <h1>Elige un color</h1>
      <MyFormChallenge />
    </div>
  );
};

export default App;