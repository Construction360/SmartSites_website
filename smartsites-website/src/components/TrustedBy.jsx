// src/components/TrustedBy.jsx
import React from 'react';
import { Check, Calendar, Users, MapPin } from 'lucide-react';
import benestaLogo from '../assets/benesta.svg';
import estaLogo from '../assets/Esta.png';
import yamataLogo from '../assets/yamata.png';
import ustyapi from '../assets/ust-yapi.png';
import locationIcon from '../assets/location_icon.png';
import '../styles/TrustedBy.css';
import { useTranslation } from 'react-i18next';

export default function TrustedBy() {
  const { t } = useTranslation();

  // Partner data with corresponding keys from JSON structure
  const partners = [
    {
      nameKey: 'trustedBy.partners.benesta.name',
      logo: benestaLogo,
      statusKey: 'trustedBy.partners.benesta.status',
      objectiveKey: 'trustedBy.partners.benesta.objective'
    },
    {
      nameKey: 'trustedBy.partners.esta.name',
      logo: estaLogo,
      statusKey: 'trustedBy.partners.esta.status',
      objectiveKey: 'trustedBy.partners.esta.objective'
    },
    {
      nameKey: 'trustedBy.partners.yamata.name',
      logo: yamataLogo,
      statusKey: 'trustedBy.partners.yamata.status',
      objectiveKey: 'trustedBy.partners.yamata.objective'
    },
    {
      nameKey: 'trustedBy.partners.ustyapi.name',
      logo: ustyapi,
      statusKey: 'trustedBy.partners.ustyapi.status',
      objectiveKey: 'trustedBy.partners.ustyapi.objective',
      logoClass: 'partner-logo-invert'
    }
  ];



  return (
    <section className="trustedby-section">
      <div className="trustedby-container">
        {/* Header */}
        <div className="trustedby-header">
          <span className="section-badge section-badge-cyan">
            <span className="badge-dot"></span>
            {t('trustedBy.badge')}
          </span>
          <h2 className="section-title">
            {t('trustedBy.title')}
            <span className="title-gradient"> {t('trustedBy.titleHighlight')}</span>
          </h2>
          <p className="section-description">
            {t('trustedBy.description')}
          </p>
        </div>

        {/* Partner Logos */}
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-wrapper">
                <img
                  src={partner.logo}
                  alt={t(partner.nameKey)}
                  className={`partner-logo ${partner.logoClass || ''}`}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="partner-logo-text">
                  {t(partner.nameKey)}
                </div>
              </div>
              <div className="partner-status">
                <span className="status-dot"></span>
                {t(partner.statusKey)}
              </div>
              <div className="partner-objective">
                {t(partner.objectiveKey)}
              </div>
              <div className="partner-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Partnership Map Section */}
        <div className="partnership-map-section">
          <h3 className="map-title">{t('trustedBy.mapTitle')}</h3>
          <div className="map-container">
            {/* Pins using the custom PNG icon */}
            <div className="location-dot dot-turkey" data-tooltip="Benesta: Istanbul, Turkey">
              <img src={locationIcon} alt="Location Pin" />
            </div>
            <div className="location-dot dot-turkey-2" data-tooltip="Yamata: Istanbul, Turkey">
              <img src={locationIcon} alt="Location Pin" />
            </div>
            <div className="location-dot dot-russia" data-tooltip="ESTA: Russia">
              <img src={locationIcon} alt="Location Pin" />
            </div>
            <div className="location-dot dot-russia-2" data-tooltip="Yamata: Russia">
              <img src={locationIcon} alt="Location Pin" />
            </div>
            <div className="location-dot dot-kazakhstan" data-tooltip="ESTA: Kazakhstan">
              <img src={locationIcon} alt="Location Pin" />
            </div>
            <div className="location-dot dot-iraq" data-tooltip="ESTA & Yamata: Iraq">
              <img src={locationIcon} alt="Location Pin" />
            </div>
          </div>
        </div>



      </div>

      {/* Background Elements */}
      <div className="trustedby-bg-gradient"></div>
    </section>
  );
}