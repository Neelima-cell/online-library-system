import React from 'react';
import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, showViewDetails = false }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="book-card">
      <div className="book-card-header">
        <div className="book-cover">
          <span className="book-icon">📚</span>
        </div>
        {book.isPopular && (
          <div className="popular-badge">
            ⭐ Popular
          </div>
        )}
      </div>
      
      <div className="book-card-content">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        
        <div className="book-category">
          <Link to={`/books/${book.category}`} className="category-tag">
            {book.category}
          </Link>
        </div>
        
        <div className="book-rating">
          <div className="rating-stars">
            {renderStars(book.rating)}
          </div>
          <span className="rating-value">({book.rating})</span>
        </div>
        
        <p className="book-description">
          {book.description.length > 100 
            ? `${book.description.substring(0, 100)}...` 
            : book.description
          }
        </p>
      </div>
      
      <div className="book-card-actions">
        <Link 
          to={`/book/${book.id}`} 
          className="view-details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard; 