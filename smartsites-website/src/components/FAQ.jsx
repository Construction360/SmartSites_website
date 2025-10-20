// src/components/FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import '../styles/FAQ.css';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);
  
  // Create an array of FAQ question keys that match our JSON structure
  const faqKeys = [
    'q1',
    'q2',
    'q3',
    'q4',
    'q5',
    'q6',
    'q7',
    'q8',
    'q9'
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="section-badge section-badge-purple">
            <span className="badge-dot"></span>
            {t('faq.badge')}
          </span>
          <h2 className="section-title">
            {t('faq.title')}
            <span className="title-gradient"> {t('faq.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('faq.description')}
            <br />
            {t('faq.description2')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqKeys.map((faqKey, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <HelpCircle size={24} className="faq-icon" />
                <span className="faq-question-text">{t(`faq.questions.${faqKey}.question`)}</span>
                <ChevronDown 
                  size={24} 
                  className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{t(`faq.questions.${faqKey}.answer`)}</p>
              </div>

              <div className="faq-item-glow"></div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-cta">
          <h3 className="faq-cta-title">{t('faq.cta.title')}</h3>
          <p className="faq-cta-text">
            {t('faq.cta.description')}
          </p>
          <button 
            className="modern-btn modern-btn-primary modern-btn-large"
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/smartsitestr/30min'
                });
              }
            }}
          >
            <span>{t('faq.cta.button')}</span>
            <div className="btn-glow"></div>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="faq-bg-gradient"></div>
    </section>
  );
}