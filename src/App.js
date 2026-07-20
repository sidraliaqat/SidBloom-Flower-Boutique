import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';

import flowerData from './data/flowers.json';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  const flowers = flowerData.flowers;

  const categories = useMemo(() => {
    const allCategories = flowers.map(flower => flower.category);
    return ['All', ...new Set(allCategories)];
  }, [flowers]);

  const filteredFlowers = useMemo(() => {
    let filtered = flowers;

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(flower =>
        flower.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(flower => flower.category === selectedCategory);
    }

    return filtered;
  }, [flowers, searchTerm, selectedCategory]);

  const sortedFlowers = useMemo(() => {
    const sorted = [...filteredFlowers];

    switch (sortOption) {
      case 'low-to-high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'high-to-low':
        return sorted.sort((a, b) => b.price - a.price);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  }, [filteredFlowers, sortOption]);

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <div className="controls-section">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
          />
          
          <FilterBar 
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />
        </div>

        <div className="results-info">
          <p>🌸 Showing {sortedFlowers.length} beautiful blooms</p>
        </div>

        <ProductGrid flowers={sortedFlowers} />
      </main>

      <Footer />
    </div>
  );
}

export default App;