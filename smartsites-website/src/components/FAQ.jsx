import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ShieldAlert, Cpu, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: <Cpu size={20} />,
      question: t('faq.questions.q1.question'),
      answer: t('faq.questions.q1.answer'),
    },
    {
      icon: <HelpCircle size={20} />,
      question: t('faq.questions.q8.question'),
      answer: t('faq.questions.q8.answer'),
    },
    {
      icon: <Lock size={20} />,
      question: t('faq.questions.q3.question'),
      answer: t('faq.questions.q3.answer'),
    },
    {
      icon: <ShieldAlert size={20} />,
      question: t('faq.questions.q9.question'),
      answer: t('faq.questions.q9.answer'),
    }
  ];

  return (
    <section id="faq" className="saas-faq">
      <div className="saas-faq-container">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="saas-section-header centered"
        >
          <span className="saas-badge">
            <span className="dot"></span>
            {t('faq.badge', 'FAQ')}
          </span>
          <h2 className="saas-title">{t('faq.title')}</h2>
          <p className="saas-subtitle">{t('faq.description')}</p>
        </motion.div>

        <div className="saas-accordion">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`saas-faq-item ${isActive ? 'active' : ''}`}
              >
                <button 
                  className="saas-faq-question" 
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <div className="saas-question-content">
                    <span className="saas-faq-icon">{faq.icon}</span>
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown className="saas-chevron" size={20} />
                </button>
                <div className="saas-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
      <div className="faq-bg-glow"></div>
    </section>
  );
}