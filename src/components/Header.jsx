import React from 'react';
import './Header.css'; // or include in App.css

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">SavIT <span className="badge">Beta</span></div>
      <nav>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}