// src/components/TrustedBy.jsx
import React from 'react';
import { Check, Calendar, Users } from 'lucide-react';
import benestaLogo from '../assets/benesta.svg';
import estaLogo from '../assets/Esta.png';
import yamataLogo from '../assets/yamata.png';

export default function TrustedBy() {
  const partners = [
    {
      name: "Benesta Construction",
      logo: benestaLogo,
      status: "MVP Deployed"
    },
    {
      name: "ESTA Construction",
      logo: estaLogo,
      status: "Pilot Program"
    },
    {
      name: "Yamata İnşaat ve Yatırım A.Ş.",
      logo: yamataLogo,
      status: "In Discussion"
    }
  ];

    const achievements = [
    {
      icon: <Check size={24} />,
      title: "MVP Deployed",
      description: "Successfully tested at Benesta Construction"
    },
    {
      icon: <Calendar size={24} />,
      title: "Pilot Programs",
      description: "In development with industry leaders"
    },
    {
      icon: <Users size={24} />,
      title: "Industry Validated",
      description: "Backed by construction experts"
    }
  ];

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/smartsitestr/30min'
      });
    }
    return false;
  };

  return (
    <section className="trustedby-section">
      <div className="trustedby-container">
        {/* Header */}
        <div className="trustedby-header">
          <span className="section-badge section-badge-cyan">
            <span className="badge-dot"></span>
            INDUSTRY PARTNERSHIPS
          </span>
          <h2 className="section-title">
            Pioneering Smart Construction
            <span className="title-gradient"> in Turkey</span>
          </h2>
          <p className="section-description">
            Collaborating with industry leaders to transform construction site management
          </p>
        </div>

        {/* Partner Logos */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-wrapper">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="partner-logo-text">
                  {partner.name}
                </div>
              </div>
              <div className="partner-status">
                <span className="status-dot"></span>
                {partner.status}
              </div>
              <div className="partner-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                {achievement.icon}
                <div className="achievement-icon-glow"></div>
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action - UPDATED */}
        <div className="trustedby-cta">
          <p className="trustedby-cta-text">
            Join Turkey's leading construction companies in revolutionizing site management
          </p>
          <button 
            className="modern-btn modern-btn-primary modern-btn-large"
            onClick={openCalendly}
          >
            <Calendar size={20} />
            <span>Schedule a Call</span>
            <div className="btn-glow"></div>
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className="trustedby-bg-gradient"></div>
    </section>
  );
}