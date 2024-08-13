import React, { useState } from 'react';
import './App.css';

function App() {
  const countries = ['US', 'Japan', 'South Korea', 'China'];
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="App">
        <h1>Hover Over the Countries</h1>
        <ul>
        {countries.map((country, index) => {
            let className = 'country';
            if (selectedCountry === country) {
              className += ' selected';
            }

            return (
              <li
                key={index}
                className={className}
                onClick={() => handleCountryClick(country)}
              >
                {country}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;


// country -> element
// index -> index of array

/*
key={index}: The key prop is required by React when rendering lists of elements. It helps React identify which items have changed, been added, or removed. Here, we’re using the index as the key, which is the position of the country in the array (e.g., 0, 1, 2, etc.). Using index as a key is fine for small, static lists.
*/

/*
className="country": This assigns a CSS class name (country) to the <li> element, allowing us to apply specific styles to it. In React, you use className instead of class to avoid conflicts with the JavaScript class keyword.
*/
