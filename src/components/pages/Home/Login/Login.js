import React, { useState } from 'react';
import './Login.css';

const predefinedUsers = [
  {
    username: 'John Doe',
    password: 'password123',
    role: 'user',
  },
  {
    username: 'Jane Doe',
    password: 'password321',
    role: 'host',
  }
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError('');

    // Find the user in the predefined list
    const user = predefinedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Store user information and role in localStorage
      localStorage.setItem('username', user.username);
      localStorage.setItem('role', user.role);

      // Show alert on successful login
      alert(`Welcome, ${user.username}!`);

      // Redirect based on role
      if (user.role === 'host') {
        window.location.href = '/listing'; // Redirect to listing page for hosts
      } else {
        window.location.href = '/home'; // Redirect to home page for regular users
      }
    } else {
      setError('Invalid username or password');
    }

    setLoading(false);
  };

  return (
    <>
      {/* Header with logo as a clickable link */}
      <a href="/home">
        <img
          src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
          className="header-logo"
          alt="logo"
        />
      </a>

      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="login-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {error && <p className="error-message">{error}</p>}
          <button
            className="login-button"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
