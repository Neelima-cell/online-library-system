import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
  selectFilteredBooks, 
  selectCategories, 
  selectSearchTerm,
  selectSelectedCategory,
  filterByCategory, 
  searchBooks, 
  clearSearch 
} from '../store/booksSlice';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import './BrowseBooks.css';

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const books = useSelector(selectFilteredBooks);
  const categories = useSelector(selectCategories);
  const searchTerm = useSelector(selectSearchTerm);
  const selectedCategory = useSelector(selectSelectedCategory);

  useEffect(() => {
    if (category) {
      dispatch(filterByCategory(category));
    } else {
      dispatch(filterByCategory('All'));
    }
  }, [category, dispatch]);

  const handleSearch = (term) => {
    dispatch(searchBooks(term));
  };

  const handleClearSearch = () => {
    dispatch(clearSearch());
  };

  const handleCategoryFilter = (categoryName) => {
    dispatch(filterByCategory(categoryName));
  };

  return (
    <div className="browse-books">
      <div className="container">
        <div className="browse-header">
          <h1>
            {category ? `${category} Books` : 'Browse Books'}
          </h1>
          <p>Discover your next favorite book from our collection</p>
        </div>

        {/* Search and Filter Controls */}
        <div className="browse-controls">
          <SearchBar 
            searchTerm={searchTerm}
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategoryFilter}
          />
        </div>

        {/* Results Info */}
        <div className="results-info">
          <p>
            Showing {books.length} book{books.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Books Grid */}
        <div className="books-container">
          {books.length > 0 ? (
            <div className="books-grid">
              {books.map((book) => (
                <BookCard key={book.id} book={book} showViewDetails={true} />
              ))}
            </div>
          ) : (
            <div className="no-books">
              <div className="no-books-content">
                <h3>No books found</h3>
                <p>
                  {searchTerm 
                    ? `No books match your search "${searchTerm}"`
                    : `No books available in ${selectedCategory === 'All' ? 'the library' : selectedCategory}`
                  }
                </p>
                {(searchTerm || selectedCategory !== 'All') && (
                  <button 
                    onClick={() => {
                      dispatch(clearSearch());
                      dispatch(filterByCategory('All'));
                    }}
                    className="reset-filters-btn"
                  >
                    View All Books
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrowseBooks; 