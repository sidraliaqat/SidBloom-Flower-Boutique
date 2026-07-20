import React from 'react';

function FilterBar({ 
  categories, 
  selectedCategory, 
  setSelectedCategory,
  sortOption,
  setSortOption 
}) {
  return (
    <div className="filter-section">
      <div className="filter-group">
        <label>🌸 Category:</label>
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>💰 Sort by:</label>
        <select 
          value={sortOption} 
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="name">Name A-Z</option>
        </select>
      </div>
    </div>
  );
}

export default FilterBar;