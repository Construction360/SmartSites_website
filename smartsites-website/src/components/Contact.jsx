import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id="contact" className="saas-contact">
      <div className="saas-contact-container">
        
        <div className="saas-contact-content">
          {/* Contact Info Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="saas-contact-info"
          >
            <div className="contact-info-header">
              <MessageSquare className="header-icon" size={28} />
              <h3>{t('contact.info.header')}</h3>
            </div>
            
            <p className="contact-info-text">
              {t('contact.info.description')}
            </p>

            <div className="contact-info-items">
              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <Mail size={20} />
                </div>
                <div className="contact-item-content">
                  <div className="contact-label">{t('contact.info.email.label')}</div>
                  <a href="mailto:smartsitestr@gmail.com" className="contact-value">
                    {t('contact.info.email.value')}
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-wrapper">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-content">
                  <div className="contact-label">{t('contact.info.location.label')}</div>
                  <span className="contact-value">
                    {t('contact.info.location.value')}
                  </span>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <h4 className="trust-title">{t('contact.info.trustTitle')}</h4>
              <div className="trust-companies">
                <span>{t('contact.trust.company1', 'Yamata Yatırım')}</span>
                <span>{t('contact.trust.company3', 'Ustyapı')}</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="saas-contact-form-wrapper"
          >
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="saas-form-success"
              >
                {t('contact.form.success')}
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="saas-form">
                <div className="saas-form-row">
                  <div className="saas-form-group saas-form-group-full">
                    <label htmlFor="name">{t('contact.form.name.label')}</label>
                    <input type="text" id="name" className="saas-input" placeholder={t('contact.form.name.placeholder')} required />
                  </div>
                </div>

                <div className="saas-form-group saas-form-group-full">
                  <label htmlFor="email">{t('contact.form.email.label')}</label>
                  <input type="email" id="email" className="saas-input" placeholder={t('contact.form.email.placeholder')} required />
                </div>

                <div className="saas-form-group saas-form-group-full">
                  <label htmlFor="company">{t('contact.form.company.label')}</label>
                  <input type="text" id="company" className="saas-input" placeholder={t('contact.form.company.placeholder')} />
                </div>

                <div className="saas-form-group saas-form-group-full">
                  <label htmlFor="message">{t('contact.form.message.label')}</label>
                  <textarea id="message" className="saas-textarea" placeholder={t('contact.form.message.placeholder')} required></textarea>
                </div>

                <button type="submit" className="saas-btn saas-btn-primary" style={{ width: '100%' }}>
                  <Send size={18} />
                  <span>{t('contact.form.button')}</span>
                </button>
                <p className="saas-form-note">{t('contact.form.note')}</p>
              </form>
            )}
          </motion.div>
        </div>

      </div>
      <div className="contact-bg-glow"></div>
    </section>
  );
}