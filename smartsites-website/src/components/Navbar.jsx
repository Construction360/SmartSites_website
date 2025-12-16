// src/components/Navbar.jsx - WITH LANGUAGE SELECTOR
import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import LanguageSelector from './LanguageSelector'; // Import LanguageSelector
import logo1 from "../assets/logo_white.svg";
import logo2 from "../assets/logo_black.svg";
import '../styles/Navbar.css';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation(); // Initialize translation hook

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(prev => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add favicon to the page
  useEffect(() => {
    const existingFavicon = document.querySelector("link[rel*='icon']");
    if (existingFavicon) {
      existingFavicon.href = theme === 'dark' ? logo1 : logo2;
    } else {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = theme === 'dark' ? logo1 : logo2;
      favicon.type = 'image/svg+xml';
      document.head.appendChild(favicon);
    }
  }, [theme]);

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
            src={theme === 'dark' ? logo1 : logo2}
            alt="SmartSites Logo"
            className="modern-logo"
          />
          <div className="logo-glow"></div>
        </div>

        {/* Desktop Menu */}
        <div className="modern-navbar-menu">
          <button onClick={() => scrollToSection('home')} className="modern-nav-link">
            <span>{t('navbar.home')}</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('features')} className="modern-nav-link">
            <span>{t('navbar.features')}</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="modern-nav-link">
            <span>{t('navbar.howItWorks')}</span>
            <div className="nav-link-glow"></div>
          </button>
          <button onClick={() => scrollToSection('contact')} className="modern-nav-link">
            <span>{t('navbar.contact')}</span>
            <div className="nav-link-glow"></div>
          </button>
        </div>

        <div className="modern-navbar-actions">
          {/* Language Selector */}
          <LanguageSelector />

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

          {/* Schedule Call Button */}
          <button
            onClick={openCalendly}
            className="modern-btn modern-btn-primary"
          >
            <Calendar size={18} />
            <span>{t('navbar.scheduleCall')}</span>
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
            {t('navbar.home')}
          </button>
          <button onClick={() => scrollToSection('features')} className="modern-mobile-link">
            {t('navbar.features')}
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="modern-mobile-link">
            {t('navbar.howItWorks')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="modern-mobile-link">
            {t('navbar.contact')}
          </button>

          {/* Language Selector Mobile */}
          <LanguageSelector />

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
            {t('navbar.scheduleCall')}
          </button>
        </div>
      )}
    </nav>
  );
}