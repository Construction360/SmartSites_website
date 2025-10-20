// src/components/HowItWorks.jsx - MODERN REDESIGN
import React from 'react';
import { Camera, Cpu, Monitor, Bell, Check } from 'lucide-react';
import '../styles/HowItWorks.css';
import { useTranslation } from 'react-i18next';

export default function HowItWorks() {
  const { t } = useTranslation();
  
  // Define step keys to match our JSON structure
  const stepKeys = ['deploy', 'process', 'monitor', 'alerts'];

  // Map icons to each step
  const stepIcons = {
    deploy: <Camera size={40} />,
    process: <Cpu size={40} />,
    monitor: <Monitor size={40} />,
    alerts: <Bell size={40} />
  };

  return (
    <section id="how-it-works" className="modern-howitworks">
      <div className="modern-howitworks-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge section-badge-cyan">
            <span className="badge-dot"></span>
            {t('howItWorks.badge')}
          </span>
          <h2 className="section-title">
            {t('howItWorks.title')}
            <span className="title-gradient"> {t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('howItWorks.description')}
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="modern-steps-timeline">
          {stepKeys.map((stepKey, index) => (
            <div key={index} className="modern-step-card">
              <div className="step-number-badge">
                <span>{t(`howItWorks.steps.${stepKey}.number`)}</span>
                <div className="badge-pulse"></div>
              </div>

              <div className="step-icon-circle">
                {stepIcons[stepKey]}
                <div className="icon-circle-glow"></div>
              </div>

              <div className="step-content">
                <h3 className="step-title">{t(`howItWorks.steps.${stepKey}.title`)}</h3>
                <p className="step-description">{t(`howItWorks.steps.${stepKey}.description`)}</p>

                <ul className="step-features">
                  {t(`howItWorks.steps.${stepKey}.features`, { returnObjects: true }).map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < stepKeys.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              )}

              <div className="step-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        
      </div>

      {/* Background */}
      <div className="howitworks-bg-grid"></div>
    </section>
  );
}