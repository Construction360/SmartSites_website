// src/components/Hero.jsx - WITH i18n
import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Eye, Shield, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useTranslation(); // Initialize translation hook
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/smartsitestr/30min'
      });
    }
    return false;
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="modern-hero" id="home">
      {/* Animated Background */}
      <div className="modern-hero-bg">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-grid"></div>
        <div 
          className="hero-cursor-glow" 
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        ></div>
      </div>

      <div className="modern-hero-container">
        <div className="modern-hero-content">
          {/* Badge */}
          <div className="modern-hero-badge">
            <Zap size={16} />
            <span>{t('hero.badge')}</span>
            <div className="badge-glow"></div>
          </div>

          {/* Main Heading */}
          <h1 className="modern-hero-title">
            <span className="title-line">{t('hero.title.line1')}</span>
            <span className="title-line title-gradient">{t('hero.title.line2')}</span>
            <span className="title-line">{t('hero.title.line3')}</span>
          </h1>

          {/* Subtitle */}
          <p className="modern-hero-subtitle">
            {t('hero.subtitle')}
            <br />
            <span className="subtitle-highlight">{t('hero.subtitleHighlight')}</span>
          </p>

          {/* Stats */}
          <div className="modern-hero-stats">
            <div className="hero-stat-card">
              <div className="stat-icon">
                <Eye />
              </div>
              <div className="stat-content">
                <div className="stat-value">{t('hero.stats.monitoring.value')}</div>
                <div className="stat-label">{t('hero.stats.monitoring.label')}</div>
              </div>
              <div className="stat-glow"></div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon stat-icon-cyan">
                <Zap />
              </div>
              <div className="stat-content">
                <div className="stat-value">{t('hero.stats.analytics.value')}</div>
                <div className="stat-label">{t('hero.stats.analytics.label')}</div>
              </div>
              <div className="stat-glow stat-glow-cyan"></div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon stat-icon-purple">
                <Shield />
              </div>
              <div className="stat-content">
                <div className="stat-value">{t('hero.stats.coverage.value')}</div>
                <div className="stat-label">{t('hero.stats.coverage.label')}</div>
              </div>
              <div className="stat-glow stat-glow-purple"></div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="modern-hero-buttons">
            <button className="modern-btn modern-btn-primary modern-btn-large" onClick={openCalendly}>
              <Calendar size={20} />
              <span>{t('hero.buttons.scheduleCall')}</span>
              <div className="btn-glow"></div>
            </button>
            <button className="modern-btn modern-btn-secondary modern-btn-large" onClick={scrollToFeatures}>
              <span>{t('hero.buttons.exploreFeatures')}</span>
              <div className="btn-glow-secondary"></div>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="modern-hero-trust">
            <p className="trust-label">{t('hero.trust.label')}</p>
            <div className="trust-companies">
              <span className="trust-company">Benesta</span>
              <span className="trust-divider">•</span>
              <span className="trust-company">ESTA</span>
              <span className="trust-divider">•</span>
              <span className="trust-company">Yamata İnşaat</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="modern-hero-visual">
          <div className="hero-visual-container">
            <div className="hero-visual-card">
               <video
                src="https://files.catbox.moe/1qktue.mp4"
                className="hero-visual-img"
                autoPlay
                loop
                muted
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <div className="visual-overlay"></div>
            </div>
            <div className="visual-float visual-float-1"></div>
            <div className="visual-float visual-float-2"></div>
            <div className="visual-float visual-float-3"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <span>{t('hero.scrollText')}</span>
      </div>
    </section>
  );
}