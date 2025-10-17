// src/App.jsx - WITH TRUSTEDBY SECTION
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/website.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <TrustedBy />  {/* NEW SECTION - Between Hero and Features */}
        <Features />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;