// src/components/Navbar.jsx - WITH CALENDLY
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from "../assets/Opaque.png";
import '../styles/Navbar.css';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add favicon to the page
  useEffect(() => {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = logo;
    favicon.type = 'image/png';
    document.head.appendChild(favicon);

    // Cleanup function to remove the favicon when the component unmounts
    return () => {
      document.head.removeChild(favicon);
    };
  }, []); // The empty array ensures this effect runs only once

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/smartsitestr/30min'
      });
    }
    setIsMenuOpen(false);
    return false;
  };

  return (
    <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="modern-navbar-container">
        <div className="modern-navbar-logo">
          <img 
            src= {logo} 
            alt="SmartSites Logo"
            className="modern-logo"
          />
          <div className="logo-glow"></div>
        </div>

        {/* Desktop Menu */}
        <div className="modern-navbar-menu">
          <button onClick={() => scrollToSection('home')} className="modern-nav-link">
            <span>Home</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('features')} className="modern-nav-link">
            <span>Features</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="modern-nav-link">
            <span>How It Works</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('contact')} className="modern-nav-link">
            <span>Contact</span>
            <div className="nav-link-glow"></div>
          </button>
        </div>

        <div className="modern-navbar-actions">
          {/* Theme Toggle */}
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="theme-icon" />
            ) : (
              <Moon size={20} className="theme-icon" />
            )}
            <div className="theme-toggle-glow"></div>
          </button>

          {/* Schedule Call Button - REPLACED REQUEST DEMO */}
          <button 
            onClick={openCalendly}
            className="modern-btn modern-btn-primary"
          >
            <Calendar size={18} />
            <span>Schedule a Call</span>
            <div className="btn-glow"></div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="modern-navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="modern-navbar-mobile">
          <button onClick={() => scrollToSection('home')} className="modern-mobile-link">
            Home
          </button>
          <button onClick={() => scrollToSection('features')} className="modern-mobile-link">
            Features
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="modern-mobile-link">
            How It Works
          </button>
          <button onClick={() => scrollToSection('contact')} className="modern-mobile-link">
            Contact
          </button>
          
          {/* Theme Toggle Mobile */}
          <button 
            className="theme-toggle-btn theme-toggle-mobile"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? (
              <>
                <Sun size={20} />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={20} />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          {/* Schedule Call Mobile */}
          <button 
            onClick={openCalendly}
            className="modern-btn modern-btn-primary"
          >
            <Calendar size={18} />
            Schedule a Call
          </button>
        </div>
      )}
    </nav>
  );
}