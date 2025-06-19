import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ searchTerm, onSearch, onClear }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(localSearchTerm);
  };

  const handleClear = () => {
    setLocalSearchTerm('');
    onClear();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearchTerm(value);
    
    // Real-time search
    if (value.length === 0 || value.length >= 2) {
      onSearch(value);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search books by title or author..."
            value={localSearchTerm}
            onChange={handleChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            🔍
          </button>
          {localSearchTerm && (
            <button 
              type="button" 
              onClick={handleClear}
              className="clear-button"
            >
              ✕
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar; 