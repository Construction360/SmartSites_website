// src/components/Features.jsx - MODERN REDESIGN
import React from 'react';
import { Camera, Users, Package, Brain, ArrowUpRight } from 'lucide-react';
import '../styles/Features.css';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  // Feature data moved to an array, using i18n translation keys
  const features = [
    {
      icon: <Camera size={32} />,
      titleKey: 'features.cards.monitoring.title',
      descriptionKey: 'features.cards.monitoring.description',
      learnMoreKey: 'features.cards.monitoring.learnMore',
      color: "orange",
      delay: "0s"
    },
    {
      icon: <Users size={32} />,
      titleKey: 'features.cards.tracking.title',
      descriptionKey: 'features.cards.tracking.description',
      learnMoreKey: 'features.cards.tracking.learnMore',
      color: "cyan",
      delay: "0.1s"
    },
    {
      icon: <Package size={32} />,
      titleKey: 'features.cards.material.title',
      descriptionKey: 'features.cards.material.description',
      learnMoreKey: 'features.cards.material.learnMore',
      color: "purple",
      delay: "0.2s"
    },
    {
      icon: <Brain size={32} />,
      titleKey: 'features.cards.analytics.title',
      descriptionKey: 'features.cards.analytics.description',
      learnMoreKey: 'features.cards.analytics.learnMore',
      color: "orange",
      delay: "0.3s"
    }
  ];

  // Stats array for easier maintenance
  const stats = [
    {
      valueKey: 'features.stats.reduction.value',
      labelKey: 'features.stats.reduction.label',
    },
    {
      valueKey: 'features.stats.tracking.value',
      labelKey: 'features.stats.tracking.label',
    },
    {
      valueKey: 'features.stats.monitoring.value',
      labelKey: 'features.stats.monitoring.label',
    }
  ];

  return (
    <section id="features" className="modern-features">
      <div className="modern-features-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge">
            <span className="badge-dot"></span>
            {t('features.badge')}
          </span>
          <h2 className="section-title">
            {t('features.title')}
            <span className="title-gradient"> {t('features.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('features.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="modern-features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`modern-feature-card feature-${feature.color}`}
              style={{ animationDelay: feature.delay }}
            >
              <div className="feature-card-inner">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>

                <h3 className="feature-title">{t(feature.titleKey)}</h3>
                <p className="feature-description">{t(feature.descriptionKey)}</p>

                <button className="feature-learn-more">
                  <span>{t(feature.learnMoreKey)}</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="feature-card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="modern-stats-bar">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item">
                <div className="stat-number">{t(stat.valueKey)}</div>
                <div className="stat-label">{t(stat.labelKey)}</div>
                <div className="stat-bar"></div>
              </div>
              {index < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="features-bg-gradient"></div>
    </section>
  );
}