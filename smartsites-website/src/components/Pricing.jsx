// src/components/Pricing.jsx
import React from 'react';
import { Check, Calendar, Zap, ShieldCheck, Shield, Smartphone } from 'lucide-react';
import '../styles/Pricing.css';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
  const { t } = useTranslation();
  
  // Define icons for benefits
  const benefitIcons = {
    contracts: <Zap size={24} />,
    inclusive: <Shield size={24} />,
    deployment: <Smartphone size={24} />
  };

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/smartsitestr/30min'
      });
    }
    return false;
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <span className="section-badge">
            <span className="badge-dot"></span>
            {t('pricing.badge')}
          </span>
          <h2 className="section-title">
            {t('pricing.title')}
            <span className="title-gradient"> {t('pricing.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('pricing.description')}
            <br />{t('pricing.description2')}
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="pricing-main-card">
          <div className="pricing-badge">
            <Zap size={16} />
            <span>{t('pricing.main.badge')}</span>
          </div>

          <div className="pricing-header-content">
            <h3 className="pricing-plan-title">{t('pricing.main.title')}</h3>
            <p className="pricing-note">
              {t('pricing.main.description')}
            </p>
          </div>

          <button className="modern-btn modern-btn-primary modern-btn-large modern-btn-full" onClick={openCalendly}>
            <Calendar size={20} />
            <span>{t('pricing.main.button')}</span>
            <div className="btn-glow"></div>
          </button>

          {/* Features List */}
          <div className="pricing-features">
            <h4 className="pricing-features-title">{t('pricing.main.featuresTitle')}</h4>
            <ul className="pricing-features-list">
              {t('pricing.main.features', { returnObjects: true }).map((feature, index) => (
                <li key={index}>
                  <Check size={20} className="feature-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot Program Banner */}
          <div className="pricing-pilot-banner">
            <div className="pilot-banner-icon">
              <ShieldCheck size={34} />
            </div>
            <div className="pilot-banner-content">
              <h4>{t('pricing.main.pilot.title')}</h4>
              <p>{t('pricing.main.pilot.description')}</p>
            </div>
          </div>

          <div className="pricing-card-glow"></div>
        </div>

        {/* Benefits Grid */}
        <div className="pricing-benefits">
          {Object.keys(t('pricing.benefits', { returnObjects: true })).map((key) => (
            <div key={key} className="pricing-benefit-card">
              <div className="benefit-icon">
                {benefitIcons[key]}
              </div>
              <h4 className="benefit-title">{t(`pricing.benefits.${key}.title`)}</h4>
              <p className="benefit-description">{t(`pricing.benefits.${key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="pricing-custom-quote">
          <h3 className="custom-quote-title">{t('pricing.enterprise.title')}</h3>
          <p className="custom-quote-text">
            {t('pricing.enterprise.description')}
            <br />
            {t('pricing.enterprise.description2')}
          </p>
          <button className="modern-btn modern-btn-secondary modern-btn-large" onClick={openCalendly}>
            <span>{t('pricing.enterprise.button')}</span>
            <div className="btn-glow-secondary"></div>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="pricing-bg-gradient"></div>
    </section>
  );
}