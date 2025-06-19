import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPopularBooks, selectCategories } from '../store/booksSlice';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const popularBooks = useSelector(selectPopularBooks);
  const categories = useSelector(selectCategories);

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Online Library System</h1>
          <p>Discover, browse, and manage your favorite books in our comprehensive digital library.</p>
          <Link to="/books" className="cta-button">
            Explore Books
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2>Book Categories</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/books/${category}`} 
                className="category-card"
              >
                <div className="category-icon">
                  {getCategoryIcon(category)}
                </div>
                <h3>{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-books-section">
        <div className="container">
          <h2>Popular Books</h2>
          <div className="books-grid">
            {popularBooks.slice(0, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="view-more">
            <Link to="/books" className="view-more-link">
              View All Books →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    'Fiction': '📖',
    'Non-Fiction': '📚',
    'Sci-Fi': '🚀',
    'Fantasy': '🧙‍♂️',
    'Mystery': '🔍'
  };
  return icons[category] || '📕';
};

export default Home; 