import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sun, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import LanguageSelector from './LanguageSelector';
import logoWhite from "../assets/logo_white.svg";
import logoBlack from "../assets/logo_black.svg";
import '../styles/Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const existingFavicon = document.querySelector("link[rel*='icon']");
    const activeLogo = theme === 'light' ? logoBlack : logoWhite;
    
    if (existingFavicon) {
      existingFavicon.href = activeLogo;
    } else {
      const favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.href = activeLogo;
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

  const logoSrc = theme === 'light' ? logoBlack : logoWhite;

  return (
    <nav className={`saas-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="saas-navbar-container">
        
        <div className="saas-navbar-logo">
          <img src={logoSrc} alt="SmartSites Logo" className="saas-logo" />
        </div>

        {/* Desktop Menu */}
        <div className="saas-navbar-menu">
          <button onClick={() => scrollToSection('home')} className="saas-nav-link">
            {t('navbar.home')}
          </button>
          <button onClick={() => scrollToSection('features')} className="saas-nav-link">
            {t('navbar.features')}
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="saas-nav-link">
            {t('navbar.howItWorks')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="saas-nav-link">
            {t('navbar.contact')}
          </button>
        </div>

        <div className="saas-navbar-actions">
          <LanguageSelector />
          <button onClick={toggleTheme} className="saas-theme-toggle" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={openCalendly} className="saas-btn saas-btn-primary">
            <Calendar size={16} />
            <span>{t('navbar.scheduleCall')}</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="saas-navbar-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="saas-navbar-mobile">
          <button onClick={() => scrollToSection('home')} className="saas-mobile-link">
            {t('navbar.home')}
          </button>
          <button onClick={() => scrollToSection('features')} className="saas-mobile-link">
            {t('navbar.features')}
          </button>
          <button onClick={() => scrollToSection('how-it-works')} className="saas-mobile-link">
            {t('navbar.howItWorks')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="saas-mobile-link">
            {t('navbar.contact')}
          </button>
          
          <div className="saas-mobile-actions-row">
            <LanguageSelector />
            <button onClick={toggleTheme} className="saas-theme-toggle saas-theme-toggle-mobile" aria-label="Toggle theme">
              {theme === 'dark' ? (
                <><Sun size={18} /> <span>Light Mode</span></>
              ) : (
                <><Moon size={18} /> <span>Dark Mode</span></>
              )}
            </button>
          </div>

          <button onClick={openCalendly} className="saas-btn saas-btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <Calendar size={16} />
            <span>{t('navbar.scheduleCall')}</span>
          </button>
        </div>
      )}
    </nav>
  );
}