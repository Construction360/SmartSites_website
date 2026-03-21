import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Pricing.css';

export default function Pricing() {
  const { t } = useTranslation();
  
  const features = t('pricing.main.features', { returnObjects: true });

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/smartsitestr/30min'
      });
    }
    return false;
  };

  return (
    <section id="pricing" className="saas-pricing">
      <div className="saas-pricing-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="saas-section-header centered"
        >
          <span className="saas-badge">
            <span className="dot"></span>
            {t('pricing.badge', 'PRICING')}
          </span>
          <h2 className="saas-title">
            {t('pricing.title')}
          </h2>
          <p className="saas-subtitle">
            {t('pricing.description')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="saas-pricing-card"
        >
          <div className="saas-pricing-inner">
            <div className="saas-pricing-badge">
              {t('pricing.main.pilot.title')}
            </div>
            
            <div className="saas-pricing-amount-text">
              <h3 className="saas-value-text">{t('pricing.main.title')}</h3>
            </div>
            
            <p className="saas-pricing-desc">
              {t('pricing.main.description')}
            </p>

            <div className="saas-pricing-features">
              {Array.isArray(features) && features.map((feature, i) => (
                <div key={i} className="saas-pricing-feature">
                  <Check size={18} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="saas-btn saas-btn-primary" style={{ width: '100%' }} onClick={openCalendly}>
              {t('pricing.main.button', 'Start 3-Month Pilot')}
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="saas-quote-block"
        >
          <h3 className="saas-quote-title">{t('pricing.enterprise.title')}</h3>
          <p className="saas-quote-desc">{t('pricing.enterprise.description')}</p>
          <button className="saas-btn saas-btn-secondary" onClick={openCalendly}>
            <span>{t('pricing.enterprise.button')}</span>
            <ArrowRight size={16} />
          </button>
        </motion.div>

      </div>
      <div className="pricing-bg-glow"></div>
    </section>
  );
}