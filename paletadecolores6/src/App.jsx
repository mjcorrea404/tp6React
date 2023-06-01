import { Container } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react';

const App = () => {
  const [color, setColor] = useState('');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleColorSubmit = (event) => {
    event.preventDefault();

    if (color.trim() === '') {
      return;
    }

    localStorage.setItem('color', color);
    setColor('');
  };

  return (
    <div>
      <h1>Color Form</h1>
      <form onSubmit={handleColorSubmit}>
        <input
          type="text"
          value={color}
          onChange={handleColorChange}
          placeholder="Ingrese un color"
        />
        <button type="submit">Guardar color</button>
      </form>
    </div>
  );
};

export default App;
