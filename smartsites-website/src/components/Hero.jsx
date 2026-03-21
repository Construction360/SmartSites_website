import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Eye, Zap, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
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
    <section className="saas-hero" id="home">
      {/* Background Grid Grid from Global.css */}
      <div className="saas-grid-bg" aria-hidden="true"></div>

      <div className="saas-hero-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="saas-badge"
        >
          <span className="dot gold"></span>
          AI-Powered Construction Intelligence
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="saas-title"
        >
          {t('hero.title.line1')}{' '}
          <span className="text-gradient-gold">{t('hero.title.line2')}</span><br/>
          {t('hero.title.line3')}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="saas-subtitle"
        >
          Elevate your worksite with real-time analytics, continuous tracking, and unparalleled AI-driven insights engineered for modern construction teams.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <button className="saas-btn saas-btn-primary" onClick={openCalendly}>
            <Calendar size={18} />
            <span>{t('hero.buttons.scheduleCall')}</span>
          </button>
          <button className="saas-btn saas-btn-secondary" onClick={scrollToFeatures}>
            <span>{t('hero.buttons.exploreFeatures')}</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hero-stats-row"
        >
          <div className="saas-stat-pill">
            <span className="stat-icon-wrapper"><Eye size={20} /></span>
            <div className="stat-content">
              <span className="stat-value">{t('hero.stats.monitoring.value')}</span>
              <span className="stat-label">{t('hero.stats.monitoring.label')}</span>
            </div>
          </div>
          <div className="saas-stat-pill">
            <span className="stat-icon-wrapper"><Zap size={20} /></span>
            <div className="stat-content">
              <span className="stat-value">{t('hero.stats.analytics.value')}</span>
              <span className="stat-label">{t('hero.stats.analytics.label')}</span>
            </div>
          </div>
          <div className="saas-stat-pill">
            <span className="stat-icon-wrapper"><ShieldCheck size={20} /></span>
            <div className="stat-content">
              <span className="stat-value">{t('hero.stats.coverage.value')}</span>
              <span className="stat-label">{t('hero.stats.coverage.label')}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        className="saas-hero-visual"
      >
        <div className="hero-video-shell">
          <iframe
            src="https://www.youtube.com/embed/tnsBZqBI_9M?autoplay=1&mute=1&playsinline=1&loop=1&playlist=tnsBZqBI_9M&controls=0&modestbranding=1&rel=0&iv_load_policy=3&fs=0&disablekb=1"
            title="SmartSites product video"
            className="hero-video-embed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Blend edge modifier to fade out bottom of video */}
          <div className="hero-video-blocker" aria-hidden="true"></div>
        </div>
      </motion.div>
    </section>
  );
}