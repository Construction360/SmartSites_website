// src/components/Contact.jsx - MODERN REDESIGN
import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
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
    const mailtoLink = `mailto:smtadeeb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    setStatus('success');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="modern-contact">
      <div className="modern-contact-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge section-badge-purple">
            <span className="badge-dot"></span>
            CONTACT US
          </span>
          <h2 className="section-title">
            Ready to Transform
            <span className="title-gradient"> Your Construction Site?</span>
          </h2>
          <p className="section-description">
            Schedule a demo and see how SmartSites brings your construction sites under control.
          </p>
        </div>

        <div className="modern-contact-content">
          {/* Contact Info */}
          <div className="modern-contact-info">
            <div className="contact-info-header">
              <MessageSquare className="header-icon" />
              <h3>Get in Touch</h3>
            </div>

            <p className="contact-info-text">
              Have questions? Want to see a demo? 
              <br />
              We'd love to hear from you.
            </p>

            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="info-icon">
                  <Mail size={20} />
                  <div className="icon-bg"></div>
                </div>
                <div className="info-content">
                  <div className="info-label">Email</div>
                  <a href="mailto:smartsitestr@gmail.com" className="info-value">
                    smartsitestr@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="info-icon info-icon-cyan">
                  <MapPin size={20} />
                  <div className="icon-bg"></div>
                </div>
                <div className="info-content">
                  <div className="info-label">Location</div>
                  <div className="info-value">Istanbul, Turkey</div>
                </div>
              </div>
            </div>

            <div className="contact-trust-box">
              <p className="trust-box-title">Trusted by:</p>
              <div className="trust-box-companies">
                <span>Benesta Construction</span>
                <span>ESTA Construction</span>
                <span>Yamata İnşaat</span>
              </div>
            </div>

            <div className="contact-decoration"></div>
          </div>

          {/* Contact Form */}
          <div className="modern-contact-form-wrapper">
            <form onSubmit={handleSubmit} className="modern-contact-form">
              <div className="modern-form-row">
                <div className="modern-form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="modern-form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="modern-form-row">
                <div className="modern-form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                  />
                </div>

                <div className="modern-form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 XXX XXX XX XX"
                  />
                </div>
              </div>

              <div className="modern-form-group modern-form-group-full">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="modern-form-success">
                  ✓ Your email client will open to send your request!
                </div>
              )}

              <button type="submit" className="modern-btn modern-btn-primary modern-btn-large modern-btn-full">
                <Send size={20} />
                <span>Send Message</span>
                <div className="btn-glow"></div>
              </button>

              <p className="modern-form-note">
                By submitting, you agree to our privacy policy
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