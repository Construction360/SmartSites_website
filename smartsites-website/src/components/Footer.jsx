import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';
import logoLight from "../assets/transparent.png";
import logoDark from "../assets/tansparent_black.png";
import '../styles/Footer.css';

export default function Footer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="saas-footer">
      <div className="saas-footer-container">
        <div className="saas-footer-content">
          
          <div className="saas-footer-column saas-footer-main">
            <img src={theme === 'dark' ? logoDark : logoLight} alt="SmartSites Logo" className="saas-footer-logo" />
            <p className="saas-footer-tagline">
              {t('footer.tagline')}
            </p>

            <div className="saas-footer-contact-items">
              <a href={`mailto:${t('footer.email')}`} className="saas-footer-contact-link">
                <Mail size={18} />
                <span>{t('footer.email')}</span>
              </a>
              <div className="saas-footer-contact-link">
                <MapPin size={18} />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>

          <div className="saas-footer-column">
            <h4 className="saas-footer-title">{t('footer.sections.navigation.title')}</h4>
            <button onClick={() => scrollToSection('home')} className="saas-footer-link">
              {t('footer.sections.navigation.home')}
            </button>
            <button onClick={() => scrollToSection('features')} className="saas-footer-link">
              {t('footer.sections.navigation.features')}
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="saas-footer-link">
              {t('footer.sections.navigation.howItWorks')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="saas-footer-link">
              {t('footer.sections.navigation.contact')}
            </button>
          </div>

          <div className="saas-footer-column">
            <h4 className="saas-footer-title">{t('footer.sections.features.title')}</h4>
            <span className="saas-footer-text">{t('footer.sections.features.monitoring')}</span>
            <span className="saas-footer-text">{t('footer.sections.features.tracking')}</span>
            <span className="saas-footer-text">{t('footer.sections.features.material')}</span>
            <span className="saas-footer-text">{t('footer.sections.features.analytics')}</span>
          </div>

          <div className="saas-footer-column">
            <h4 className="saas-footer-title">{t('footer.sections.company.title')}</h4>
            <span className="saas-footer-text">{t('footer.sections.company.about')}</span>
            <span className="saas-footer-text">{t('footer.sections.company.careers')}</span>
            <button onClick={() => scrollToSection('contact')} className="saas-footer-link">
              {t('footer.sections.company.demo')}
            </button>
            <span className="saas-footer-text">{t('footer.sections.company.privacy')}</span>
          </div>
        </div>

        <div className="saas-footer-bottom">
          <p className="saas-footer-copyright">
            © {currentYear} SmartSites. {t('footer.copyright').split('© 2024 SmartSites. ')[1] || 'All rights reserved.'}
          </p>

          <button className="saas-scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      <div className="footer-ambient-glow"></div>
    </footer>
  );
}