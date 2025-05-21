import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Questionnaire from './components/Questionnaire';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Steps />
          </>
        } />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>
    </Router>
  );
}

export default App;