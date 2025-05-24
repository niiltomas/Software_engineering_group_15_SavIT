import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Solve your IT problems<br />in minutes</h1>
        <p>Answer a few simple questions about your IT issue and get an instant, personalized solution powered by AI.</p>
        <div className="hero__buttons">
          <Button variant="primary" onClick={() => navigate('/questionnaire')}>Get Help Now</Button>
          <Button variant="secondary" onClick={() => navigate('/register')}>Register</Button>
          <Button variant="secondary" onClick={() => navigate('/login')}>Login</Button>
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="Code on laptop" />
      </div>
    </section>
  );
}
