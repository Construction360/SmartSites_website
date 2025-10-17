// src/App.jsx - WITH PRICING & FAQ SECTIONS
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/website.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Pricing />      {/* NEW - Pricing Section */}
        <FAQ />          {/* NEW - FAQ Section */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;