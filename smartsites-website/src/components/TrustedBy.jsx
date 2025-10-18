import React from 'react';
import { Check, Calendar, Users, MapPin } from 'lucide-react'; // Add MapPin here
import benestaLogo from '../assets/benesta.svg';
import estaLogo from '../assets/Esta.png';
import yamataLogo from '../assets/yamata.png';
import locationIcon from '../assets/location_icon.png';

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
          <h2  className="section-title">
            Leading the Global Shift to 
             <span className="title-gradient"> Smart Construction</span>
          </h2>
          <p className="section-description">
            Collaborating with industry leaders to transform construction site management worldwide.
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
       
        {/* Partnership Map Section */}
        <div className="partnership-map-section">
            <h3 className="map-title">Our Partners-Global Reach</h3>
            <div className="map-container">
                {/* Pins using the custom PNG icon */}
                <div className="location-dot dot-turkey" data-tooltip="Benesta: Istanbul, Turkey">
                    <img src={locationIcon} alt="Location Pin"/>
                </div>
                <div className="location-dot dot-turkey-2" data-tooltip="Yamata: Istanbul, Turkey">
                     <img src={locationIcon} alt="Location Pin"/>
                </div>
                <div className="location-dot dot-russia" data-tooltip="ESTA: Russia">
                     <img src={locationIcon} alt="Location Pin"/>
                </div>
                <div className="location-dot dot-russia-2" data-tooltip="Yamata: Russia">
                     <img src={locationIcon} alt="Location Pin"/>
                </div>
                <div className="location-dot dot-kazakhstan" data-tooltip="ESTA: Kazakhstan">
                     <img src={locationIcon} alt="Location Pin"/>
                </div>
                <div className="location-dot dot-iraq" data-tooltip="ESTA & Yamata: Iraq">
                     <img src={locationIcon} alt="Location Pin"/>
                </div>
            </div>
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
            Join industry leaders worldwide in revolutionizing site management.
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

