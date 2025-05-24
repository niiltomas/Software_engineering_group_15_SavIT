import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem('savIT_users') || '[]');
}

export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const users = getRegisteredUsers();
    const found = users.find(
      user =>
        (user.name && user.name.toLowerCase() === name.trim().toLowerCase()) ||
        (user.email && user.email.toLowerCase() === email.trim().toLowerCase())
    );
    if (found) {
      localStorage.setItem('savIT_user', JSON.stringify(found));
      setError('');
      navigate('/'); // Go to initial page or profile
    } else {
      setError('User not found. Please register first.');
    }
  };

  return (
    <div className="register-container">
      <h2 style={{ marginBottom: '2rem' }}>
        Log in to access your profile and past inquiries.
      </h2>
      <form className="register-form" onSubmit={handleLogin}>
        <label className="register-label">
          Name
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="register-input"
            placeholder="Enter your name"
          />
        </label>
        <label className="register-label">
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="register-input"
            placeholder="Enter your email"
          />
        </label>
        <button
          type="submit"
          className="register-submit"
          style={{ marginTop: '1rem' }}
        >
          Log In
        </button>
      </form>
      {error && (
        <div style={{ marginTop: '1.5rem', color: '#dc2626', textAlign: 'center' }}>
          {error}
          <br />
          <button
            className="register-submit"
            style={{ marginTop: '1rem', background: '#2563eb' }}
            onClick={() => navigate('/register')}
          >
            Go to Register
          </button>
        </div>
      )}
    </div>
  );
}
