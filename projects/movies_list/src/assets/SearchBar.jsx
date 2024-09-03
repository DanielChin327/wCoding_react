import React from 'react';

// Component for the search bar
function SearchBar({ setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query in the App state
  };

  return (
    <input
      type="text"
      placeholder="Search by title, year, genre, or cast..."
      onChange={handleInputChange}
      className="search-bar"
    />
  );
}

export default SearchBar;
