import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = { name, email, agreed };
    // Get all users or empty array
    const users = JSON.parse(localStorage.getItem('savIT_users') || '[]');
    // Prevent duplicate registration by email or name
    if (!users.some(u => u.email === email || u.name === name)) {
      users.push(newUser);
      localStorage.setItem('savIT_users', JSON.stringify(users));
    }
    // Set current session user
    localStorage.setItem('savIT_user', JSON.stringify(newUser));
    navigate('/'); // Go back to initial page
  };

  return (
    <div className="register-container">
      <h2 style={{ marginBottom: '2rem' }}>
        Enter your name and email to access your profile. Recieve personalised solutions and revise past inquiries.
      </h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="register-label">
          Name
          <input
            type="text"
            value={name}
            required
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
            required
            onChange={e => setEmail(e.target.value)}
            className="register-input"
            placeholder="Enter your email"
          />
        </label>
        <div className="register-terms">
          <input
            type="checkbox"
            checked={agreed}
            onChange={e => setAgreed(e.target.checked)}
            id="terms"
          />
          <label htmlFor="terms" style={{ marginLeft: 8 }}>
            I agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="register-submit"
          disabled={!agreed}
        >
          Save &amp; Send
        </button>
      </form>
    </div>
  );
}
