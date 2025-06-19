import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path === '/books' && (location.pathname === '/books' || location.pathname.startsWith('/books/'))) return true;
    if (path === '/add-book' && location.pathname === '/add-book') return true;
    return false;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📚 Online Library
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/books" 
              className={`nav-link ${isActive('/books') ? 'active' : ''}`}
            >
              Browse Books
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/add-book" 
              className={`nav-link ${isActive('/add-book') ? 'active' : ''}`}
            >
              Add Book
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 