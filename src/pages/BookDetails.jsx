import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { selectBookById } from '../store/booksSlice';
import './BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector(state => selectBookById(state, id));

  if (!book) {
    return (
      <div className="book-details">
        <div className="container">
          <div className="book-not-found">
            <h2>Book Not Found</h2>
            <p>The book you're looking for doesn't exist.</p>
            <Link to="/books" className="back-link">
              ← Back to Browse Books
            </Link>
          </div>
        </div>
      </div>
    );
  }

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
    <div className="book-details">
      <div className="container">
        <div className="book-details-content">
          <div className="book-header">
            <button 
              onClick={() => navigate(-1)} 
              className="back-button"
            >
              ← Back
            </button>
            <Link to="/books" className="browse-link">
              Back to Browse Books
            </Link>
          </div>

          <div className="book-info">
            <div className="book-cover">
              <div className="book-placeholder">
                <span className="book-icon">📚</span>
              </div>
              {book.isPopular && (
                <div className="popular-badge">
                  ⭐ Popular
                </div>
              )}
            </div>

            <div className="book-details-text">
              <h1 className="book-title">{book.title}</h1>
              <h2 className="book-author">by {book.author}</h2>
              
              <div className="book-meta">
                <div className="meta-item">
                  <span className="meta-label">Category:</span>
                  <Link 
                    to={`/books/${book.category}`}
                    className="category-link"
                  >
                    {book.category}
                  </Link>
                </div>
                
                <div className="meta-item">
                  <span className="meta-label">Published:</span>
                  <span className="meta-value">{book.publishYear}</span>
                </div>
                
                <div className="meta-item">
                  <span className="meta-label">ISBN:</span>
                  <span className="meta-value">{book.isbn}</span>
                </div>
              </div>

              <div className="book-rating">
                <div className="rating-stars">
                  {renderStars(book.rating)}
                </div>
                <span className="rating-value">
                  {book.rating.toFixed(1)} out of 5
                </span>
              </div>

              <div className="book-description">
                <h3>Description</h3>
                <p>{book.description}</p>
              </div>

              <div className="book-actions">
                <Link 
                  to="/books" 
                  className="action-button primary"
                >
                  Browse More Books
                </Link>
                <Link 
                  to={`/books/${book.category}`}
                  className="action-button secondary"
                >
                  More {book.category} Books
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails; 