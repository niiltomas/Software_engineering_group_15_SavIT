import React from 'react';
import Button from './Button';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Solve your IT problems<br />in minutes</h1>
        <p>Answer a few simple questions about your IT issue and get an instant, personalized solution powered by AI.</p>
        <div className="hero__buttons">
          <Button variant="primary">Get Help Now</Button>
          <Button variant="secondary">Register</Button>
        </div>
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="Code on laptop" />
      </div>
    </section>
  );
}