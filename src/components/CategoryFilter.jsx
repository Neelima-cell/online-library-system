import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategorySelect }) => {
  const allCategories = ['All', ...categories];

  return (
    <div className="category-filter">
      <div className="filter-label">
        <span>Filter by Category:</span>
      </div>
      <div className="category-buttons">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => onCategorySelect(category)}
            className={`category-button ${
              selectedCategory === category ? 'active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 