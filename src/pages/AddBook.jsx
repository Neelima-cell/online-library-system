import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook, selectCategories } from '../store/booksSlice';
import './AddBook.css';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);

  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    publishYear: '',
    isbn: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.trim().length < 2) {
      newErrors.title = 'Title must be at least 2 characters long';
    }

    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    } else if (formData.author.trim().length < 2) {
      newErrors.author = 'Author name must be at least 2 characters long';
    }

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 10) {
      newErrors.description = 'Description must be at least 10 characters long';
    }

    if (!formData.publishYear) {
      newErrors.publishYear = 'Publish year is required';
    } else {
      const year = parseInt(formData.publishYear);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1000 || year > currentYear) {
        newErrors.publishYear = `Publish year must be between 1000 and ${currentYear}`;
      }
    }

    if (!formData.isbn.trim()) {
      newErrors.isbn = 'ISBN is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch(addBook({
        ...formData,
        publishYear: parseInt(formData.publishYear)
      }));

      alert('Book added successfully!');
      navigate('/books');
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: '',
      author: '',
      category: '',
      description: '',
      publishYear: '',
      isbn: ''
    });
    setErrors({});
  };

  return (
    <div className="add-book">
      <div className="container">
        <div className="add-book-content">
          <h1>Add New Book</h1>
          <p>Fill in the details to add a new book to the library</p>

          <form onSubmit={handleSubmit} className="add-book-form">
            <div className="form-group">
              <label htmlFor="title">Book Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={errors.title ? 'error' : ''}
                placeholder="Enter book title"
              />
              {errors.title && <span className="error-message">{errors.title}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="author">Author *</label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className={errors.author ? 'error' : ''}
                placeholder="Enter author name"
              />
              {errors.author && <span className="error-message">{errors.author}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={errors.category ? 'error' : ''}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <span className="error-message">{errors.category}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="publishYear">Publish Year *</label>
              <input
                type="number"
                id="publishYear"
                name="publishYear"
                value={formData.publishYear}
                onChange={handleChange}
                className={errors.publishYear ? 'error' : ''}
                placeholder="e.g., 2023"
                min="1000"
                max={new Date().getFullYear()}
              />
              {errors.publishYear && <span className="error-message">{errors.publishYear}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="isbn">ISBN *</label>
              <input
                type="text"
                id="isbn"
                name="isbn"
                value={formData.isbn}
                onChange={handleChange}
                className={errors.isbn ? 'error' : ''}
                placeholder="e.g., 978-0-123456-78-9"
              />
              {errors.isbn && <span className="error-message">{errors.isbn}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={errors.description ? 'error' : ''}
                placeholder="Enter book description"
                rows="4"
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <div className="form-actions">
              <button
                type="button"
                onClick={handleReset}
                className="btn-secondary"
                disabled={isSubmitting}
              >
                Reset
              </button>
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Adding Book...' : 'Add Book'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBook; 