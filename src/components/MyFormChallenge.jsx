import React, { useState } from 'react';
import BoxColor from './BoxColor';
import './MyFormChallenge.css';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyFormChallenge = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Escribe un color"
      />
      <div className="boxes-container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} inputColor={inputValue} />
        ))}
      </div>
    </div>
  );
};

export default MyFormChallenge;