import React, { useState } from 'react';
import axios from 'axios';

const MOCK_USER = {
  username: 'admin',
  password: 'admin123',
  token: 'fake-jwt-token',
};

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    /* Uncomment below to use backend authentication
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username,
        password,
      });
      // Assuming response contains JWT token in data.token
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);

      // Optionally notify parent component about login success for UI routing
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
    */
    // Mock authentication
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      // Simulate storing JWT token
      localStorage.setItem('jwtToken', MOCK_USER.token);
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h3 className="mb-4">Library Management System - Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
