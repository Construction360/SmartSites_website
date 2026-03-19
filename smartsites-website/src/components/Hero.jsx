import React from 'react';
import { ArrowRight, Calendar, Eye, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import siteMonitoringImage from '../assets/abc.png';
import '../styles/Hero.css';

export default function Hero() {
  const { t } = useTranslation();

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
      <div className="modern-hero-bg" aria-hidden="true">
        <img
          src={siteMonitoringImage}
          alt=""
          className="hero-background-image"
        />
        <div className="hero-media-overlay"></div>
        <div className="hero-media-vignette"></div>
        <div className="hero-media-noise"></div>
      </div>

      <div className="modern-hero-container">
        <div className="modern-hero-content">
          <div className="modern-hero-chip">AI-Powered construction monitoring</div>
          <h1 className="modern-hero-title">
            <span className="title-line">{t('hero.title.line1')}</span>
            <span className="title-line title-gradient">{t('hero.title.line2')}</span>
            <span className="title-line">{t('hero.title.line3')}</span>
          </h1>

          <div className="modern-hero-buttons">
            <button className="modern-btn modern-btn-primary modern-btn-large" onClick={openCalendly}>
              <Calendar size={20} />
              <span>{t('hero.buttons.scheduleCall')}</span>
            </button>
            <button className="modern-btn modern-btn-secondary modern-btn-large" onClick={scrollToFeatures}>
              <span>{t('hero.buttons.exploreFeatures')}</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="hero-stats-row">
            <div className="hero-stat-pill">
              <span className="hero-stat-icon"><Eye size={18} /></span>
              <div className="hero-stat-copy">
                <span className="hero-stat-value">{t('hero.stats.monitoring.value')}</span>
                <span className="hero-stat-label">{t('hero.stats.monitoring.label')}</span>
              </div>
            </div>
            <div className="hero-stat-pill">
              <span className="hero-stat-icon hero-stat-icon--blue"><Zap size={18} /></span>
              <div className="hero-stat-copy">
                <span className="hero-stat-value">{t('hero.stats.analytics.value')}</span>
                <span className="hero-stat-label">{t('hero.stats.analytics.label')}</span>
              </div>
            </div>
            <div className="hero-stat-pill">
              <span className="hero-stat-icon hero-stat-icon--muted"><ShieldCheck size={18} /></span>
              <div className="hero-stat-copy">
                <span className="hero-stat-value">{t('hero.stats.coverage.value')}</span>
                <span className="hero-stat-label">{t('hero.stats.coverage.label')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modern-hero-visual">
          <div className="hero-video-shell">
            <iframe
              src="https://www.youtube.com/embed/tnsBZqBI_9M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=tnsBZqBI_9M&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1"
              title="SmartSites product video"
              className="hero-video-embed"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="hero-video-blocker" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}