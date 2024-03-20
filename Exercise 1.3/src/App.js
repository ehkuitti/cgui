import logo from './tuni.png';
import './App.css';
import Button from '@mui/material/Button';
import * as React from 'react';

function App() {
  const handleButtonClick = () => {
    window.location.href = 'https://www.tuni.fi/fi/tutustu-meihin/yliopisto';
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Opi lisää TUNIsta klikkaamalla alla olevaa nappia
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Button variant="contained" onClick={handleButtonClick}>LUE LISÄÄ</Button>
        
      </header>
    </div>
  );
}

export default App;