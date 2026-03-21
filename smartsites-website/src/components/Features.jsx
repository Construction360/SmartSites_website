import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, Package, Brain, ArrowRight } from 'lucide-react';
import '../styles/Features.css';
import { useTranslation } from 'react-i18next';

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Camera size={24} />,
      titleKey: 'features.cards.monitoring.title',
      descriptionKey: 'features.cards.monitoring.description',
      learnMoreKey: 'features.cards.monitoring.learnMore',
      className: "bento-large"
    },
    {
      icon: <Users size={24} />,
      titleKey: 'features.cards.tracking.title',
      descriptionKey: 'features.cards.tracking.description',
      learnMoreKey: 'features.cards.tracking.learnMore',
      className: "bento-square"
    },
    {
      icon: <Package size={24} />,
      titleKey: 'features.cards.material.title',
      descriptionKey: 'features.cards.material.description',
      learnMoreKey: 'features.cards.material.learnMore',
      className: "bento-square"
    },
    {
      icon: <Brain size={32} />,
      titleKey: 'features.cards.analytics.title',
      descriptionKey: 'features.cards.analytics.description',
      learnMoreKey: 'features.cards.analytics.learnMore',
      className: "bento-wide"
    }
  ];

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
    <section id="features" className="saas-features">
      <div className="saas-features-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="saas-section-header"
        >
          <span className="saas-badge">
            <span className="dot"></span>
            {t('features.badge')}
          </span>
          <h2 className="saas-title">
            {t('features.title')}{' '}
            <span className="text-gradient-gold">{t('features.titleHighlight')}</span>
          </h2>
          <p className="saas-subtitle">
            {t('features.description')}
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bento-card ${feature.className}`}
            >
              <div className="bento-icon-wrapper">
                {feature.icon}
              </div>
              <div className="bento-content">
                <h3 className="bento-title">{t(feature.titleKey)}</h3>
                <p className="bento-desc">{t(feature.descriptionKey)}</p>
                
                <a href="#contact" className="bento-link">
                  {t(feature.learnMoreKey)} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="saas-stats-bar"
        >
          {stats.map((stat, index) => (
            <div key={index} className="saas-stat-item">
              <div className="saas-stat-num">{t(stat.valueKey)}</div>
              <div className="saas-stat-label">{t(stat.labelKey)}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="features-bg-gradient"></div>
    </section>
  );
}