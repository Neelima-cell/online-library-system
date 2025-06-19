import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content">
          <div className="not-found-icon">
            <span>📚</span>
          </div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Oops! The page you're looking for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn-primary">
              Go Home
            </Link>
            <Link to="/books" className="btn-secondary">
              Browse Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 