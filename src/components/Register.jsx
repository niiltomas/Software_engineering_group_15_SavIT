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
    if (agreed) {
      // Save info (you can use localStorage or context as needed)
      localStorage.setItem('savIT_user', JSON.stringify({ name, email }));
      navigate('/'); // Redirect to initial page
    }
  };


  return (
    <div className="register-container">
      <h2>Enter your name and email to receive a copy of your answers and the solution generated.</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            value={name}
            required
            onChange={e => setName(e.target.value)}
            className="register-input"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            required
            onChange={e => setEmail(e.target.value)}
            className="register-input"
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
