import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for flowers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search flowers"
      />
      {searchTerm && (
        <button className="search-clear" onClick={handleClear} aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;