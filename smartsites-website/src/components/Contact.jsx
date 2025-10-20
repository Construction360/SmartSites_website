// src/components/Contact.jsx - MODERN REDESIGN
import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Demo Request from ${formData.company || formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${t('contact.info.email.value')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    setStatus('success');
    setTimeout(() => setStatus(''), 5000);
  };

  // Array of trusted companies for easier mapping
  const trustedCompanies = ['contact.info.trustTitle', 'contact.info.companies.0', 'contact.info.companies.1', 'contact.info.companies.2'];

  return (
    <section id="contact" className="modern-contact">
      <div className="modern-contact-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge section-badge-purple">
            <span className="badge-dot"></span>
            {t('contact.badge')}
          </span>
          <h2 className="section-title">
            {t('contact.title')}
            <span className="title-gradient"> {t('contact.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('contact.description')}
          </p>
        </div>

        <div className="modern-contact-content">
          {/* Contact Info */}
          <div className="modern-contact-info">
            <div className="contact-info-header">
              <MessageSquare className="header-icon" />
              <h3>{t('contact.info.header')}</h3>
            </div>

            <p className="contact-info-text">
              {t('contact.info.description')}
              <br />
              {t('contact.info.description2')}
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="info-icon">
                  <Mail size={20} />
                  <div className="icon-bg"></div>
                </div>
                <div className="info-content">
                  <div className="info-label">{t('contact.info.email.label')}</div>
                  <a href={`mailto:${t('contact.info.email.value')}`} className="info-value">
                    {t('contact.info.email.value')}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon info-icon-cyan">
                  <MapPin size={20} />
                  <div className="icon-bg"></div>
                </div>
                <div className="info-content">
                  <div className="info-label">{t('contact.info.location.label')}</div>
                  <div className="info-value">{t('contact.info.location.value')}</div>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <p className="trust-box-title">{t('contact.info.trustTitle')}:</p>
              <div className="trust-box-companies">
                {t('contact.info.companies', { returnObjects: true }).map((company, index) => (
                  <span key={index}>{company}</span>
                ))}
              </div>
            </div>

            <div className="contact-decoration"></div>
          </div>

          {/* Contact Form */}
          <div className="modern-contact-form-wrapper">
            <form onSubmit={handleSubmit} className="modern-contact-form">
              <div className="modern-form-row">
                <div className="modern-form-group">
                  <label htmlFor="name">{t('contact.form.name.label')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.name.placeholder')}
                  />
                </div>

                <div className="modern-form-group">
                  <label htmlFor="email">{t('contact.form.email.label')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('contact.form.email.placeholder')}
                  />
                </div>
              </div>

              <div className="modern-form-row">
                <div className="modern-form-group">
                  <label htmlFor="company">{t('contact.form.company.label')}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={t('contact.form.company.placeholder')}
                  />
                </div>

                <div className="modern-form-group">
                  <label htmlFor="phone">{t('contact.form.phone.label')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone.placeholder')}
                  />
                </div>
              </div>

              <div className="modern-form-group modern-form-group-full">
                <label htmlFor="message">{t('contact.form.message.label')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder={t('contact.form.message.placeholder')}
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="modern-form-success">
                  {t('contact.form.success')}
                </div>
              )}

              <button type="submit" className="modern-btn modern-btn-primary modern-btn-large modern-btn-full">
                <Send size={20} />
                <span>{t('contact.form.button')}</span>
                <div className="btn-glow"></div>
              </button>

              <p className="modern-form-note">
                {t('contact.form.note')}
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="contact-bg-gradient"></div>
    </section>
  );
}