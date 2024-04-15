import React from 'react';

const BoxColor = ({ color, inputColor }) => {
  return (
    <div className={`box ${color}`} style={{ backgroundColor: color }}>
      <p>{inputColor}</p>
      <p>{inputColor === color ? `Soy el color ${color}` : 'No soy el color'}</p>
    </div>
  );
};

export default BoxColor;
