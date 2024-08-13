import React from 'react';
import './App.css';

function App() {
  const countries = ['US', 'Japan', 'South Korea', 'China'];

  return (
    <div className="App">
      <h1>Hover Over the Countries</h1>
      <ul>
        {countries.map((country, index) => (
          <li key={index} className="country">
            {country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
