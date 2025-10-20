// src/components/Footer.jsx - MODERN REDESIGN
import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import logo from "../assets/Opaque.png";
import '../styles/Footer.css';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation(); // Initialize translation hook
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer">
      <div className="modern-footer-container">
        <div className="modern-footer-content">
          {/* Company Info */}
          <div className="footer-column footer-column-main">
            <img 
              src={logo} 
              alt="SmartSites"
              className="footer-logo"
            />
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>

            <div className="footer-contact-items">
              <a href={`mailto:${t('footer.email')}`} className="footer-contact-link">
                <Mail size={16} />
                <span>{t('footer.email')}</span>
              </a>
              <div className="footer-contact-link">
                <MapPin size={16} />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">{t('footer.sections.navigation.title')}</h4>
            <button onClick={() => scrollToSection('home')} className="footer-link">
              {t('footer.sections.navigation.home')}
            </button>
            <button onClick={() => scrollToSection('features')} className="footer-link">
              {t('footer.sections.navigation.features')}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="footer-link">
              {t('footer.sections.navigation.howItWorks')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="footer-link">
              {t('footer.sections.navigation.contact')}
            </button>
          </div>

          {/* Features */}
          <div className="footer-column">
            <h4 className="footer-column-title">{t('footer.sections.features.title')}</h4>
            <span className="footer-text">{t('footer.sections.features.monitoring')}</span>
            <span className="footer-text">{t('footer.sections.features.tracking')}</span>
            <span className="footer-text">{t('footer.sections.features.material')}</span>
            <span className="footer-text">{t('footer.sections.features.analytics')}</span>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="footer-column-title">{t('footer.sections.company.title')}</h4>
            <span className="footer-text">{t('footer.sections.company.about')}</span>
            <span className="footer-text">{t('footer.sections.company.careers')}</span>
            <button onClick={() => scrollToSection('contact')} className="footer-link">
              {t('footer.sections.company.demo')}
            </button>
            <span className="footer-text">{t('footer.sections.company.privacy')}</span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="modern-footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} SmartSites. {t('footer.copyright').split('© 2024 SmartSites. ')[1]}
            </p>
          </div>

          <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
            <span>{t('footer.backToTop')}</span>
          </button>
        </div>
      </div>

      {/* Footer Glow */}
      <div className="footer-glow"></div>
    </footer>
  );
}