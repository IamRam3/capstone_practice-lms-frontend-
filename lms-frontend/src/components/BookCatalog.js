import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MOCK_BOOKS = [
  { id: 1, title: 'Java Programming', author: 'James Gosling', category: 'Programming' },
  { id: 2, title: 'React Explained', author: 'Dan Abramov', category: 'Frontend' },
  { id: 3, title: 'Spring Boot in Action', author: 'Craig Walls', category: 'Backend' },
  { id: 4, title: 'Java Full Stack', author: 'Bhuvaneswari', category: 'Full-Stack' },
];

const BookCatalog = () => {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);         // Book list
  const [searchTerm, setSearchTerm] = useState(''); // Search input
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // For initial development/test, use mock data:
  useEffect(() => {
    setBooks(MOCK_BOOKS);
  }, []);

  /*
  // Uncomment this to enable backend integration and comment out the mock useEffect above

  useEffect(() => {
    fetchBooks('');
  }, []);

  // Fetch books from backend API with optional search query
  const fetchBooks = async (query) => {
    setIsLoading(true);
    setError('');
    try {
      let url = 'http://localhost:8080/api/books';
      if (query) {
        url = `http://localhost:8080/api/books/search?title=${encodeURIComponent(query)}`;
      }
      const response = await axios.get(url, {
        headers: {
          // Include authorization header with JWT token stored in localStorage
          Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        },
      });
      setBooks(response.data);
    } catch (err) {
      setError('Failed to fetch books from server.');
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search input change and fetch filtered books from backend
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchTerm(query);
    fetchBooks(query);
  };
  */

  // For testing with mock data only
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (!query) {
      setBooks(MOCK_BOOKS);
    } else {
      const filtered = MOCK_BOOKS.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.category.toLowerCase().includes(query)
      );
      setBooks(filtered);
    }
  };

  // Navigate to Dashboard page
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  // Logout user and navigate to login
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login', { replace: true });
  };

  return (
    <div className="container mt-5">
      <h3>Book Catalog</h3>

      <input
        type="text"
        className="form-control my-3"
        placeholder="Search by title, author or category"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {isLoading && <p>Loading books...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {!isLoading && books.length === 0 && <p>No books found.</p>}

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ id, title, author, category }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{author}</td>
              <td>{category}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Navigation Buttons */}
      <div className="mb-3">
        <button className="btn btn-primary me-3" onClick={goToDashboard}>
          Go to Dashboard
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

    </div>
  );
};

export default BookCatalog;
