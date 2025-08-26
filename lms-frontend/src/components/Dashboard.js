import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const goToBooks = () => {
    navigate('/books');
  };

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Welcome to the Library Management System Dashboard</h2>
      <div className="my-4">
        <button className="btn btn-primary me-3" onClick={goToBooks}>
          Go to Book Catalog
        </button>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
