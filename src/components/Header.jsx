import React from 'react';
import './Header.css'; // or include in App.css

import React, { useState } from 'react';
import './Header.css';


export default function Header() {
  const [showContact, setShowContact] = useState(false);


  return (
    <>
      <header className="header">
        <div className="header__logo">SavIT <span className="badge">Beta</span></div>
        <nav>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              setShowContact(true);
            }}
          >
            Contact
          </a>
        </nav>
      </header>
      {showContact && (
        <div className="contact-modal-overlay" onClick={() => setShowContact(false)}>
          <div
            className="contact-modal"
            onClick={e => e.stopPropagation()}
          >
            <h2>Contact Us</h2>
            <p>
              We are a group of students doing a software engineering project.<br />
              Email: <a href="mailto:group15@savit.edu">group15@savit.edu</a>
            </p>
            <button
              className="contact-close-btn"
              onClick={() => setShowContact(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
