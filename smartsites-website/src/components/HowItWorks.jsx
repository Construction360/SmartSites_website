import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Brain, Activity, LineChart, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/HowItWorks.css';

export default function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Camera size={20} />,
      titleKey: 'howItWorks.steps.deploy.title',
      descriptionKey: 'howItWorks.steps.deploy.description',
      featuresKey: 'howItWorks.steps.deploy.features'
    },
    {
      icon: <Brain size={20} />,
      titleKey: 'howItWorks.steps.process.title',
      descriptionKey: 'howItWorks.steps.process.description',
      featuresKey: 'howItWorks.steps.process.features'
    },
    {
      icon: <Activity size={20} />,
      titleKey: 'howItWorks.steps.monitor.title',
      descriptionKey: 'howItWorks.steps.monitor.description',
      featuresKey: 'howItWorks.steps.monitor.features'
    },
    {
      icon: <LineChart size={20} />,
      titleKey: 'howItWorks.steps.alerts.title',
      descriptionKey: 'howItWorks.steps.alerts.description',
      featuresKey: 'howItWorks.steps.alerts.features'
    }
  ];

  return (
    <section id="how" className="saas-howitworks">
      <div className="saas-howitworks-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="saas-section-header centered"
        >
          <span className="saas-badge">
            <span className="dot"></span>
            {t('howItWorks.badge')}
          </span>
          <h2 className="saas-title">
            {t('howItWorks.title')}
          </h2>
          <p className="saas-subtitle">
            {t('howItWorks.description')}
          </p>
        </motion.div>

        <div className="saas-timeline">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="saas-timeline-node"
            >
              <div className="timeline-dot">
                {step.icon}
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{t(step.titleKey)}</h3>
                <p className="timeline-desc">{t(step.descriptionKey)}</p>
                <ul className="timeline-features">
                  {Array.isArray(t(step.featuresKey, { returnObjects: true })) && t(step.featuresKey, { returnObjects: true }).map((feature, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
      <div className="howitworks-bg-glow"></div>
    </section>
  );
}