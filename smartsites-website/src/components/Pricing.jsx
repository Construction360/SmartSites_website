// src/components/Pricing.jsx
import React from 'react';
import { Check, Calendar, Zap, Shield, Smartphone } from 'lucide-react';

export default function Pricing() {
  const features = [
    "24/7 Smart camera monitoring",
    "Real-time AI analytics dashboard",
    "Worker & equipment tracking",
    "Digital twin integration",
    "Automated progress reports",
    "Safety compliance alerts",
    "Mobile app access",
    "Cloud data storage",
    "Technical support"
  ];

  const benefits = [
    {
      icon: <Zap size={24} />,
      title: "No Long-Term Contracts",
      description: "Monthly subscription, cancel anytime"
    },
    {
      icon: <Shield size={24} />,
      title: "All-Inclusive",
      description: "Hardware, software & support included"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Quick Deployment",
      description: "Live in 3-5 days on your site"
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
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <span className="section-badge">
            <span className="badge-dot"></span>
            PRICING
          </span>
          <h2 className="section-title">
            Simple, Transparent
            <span className="title-gradient"> Subscription Pricing</span>
          </h2>
          <p className="section-description">
            Flexible monthly plans designed for construction projects of all sizes.
            <br />No hidden fees, no long-term commitments.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="pricing-main-card">
          <div className="pricing-badge">
            <Zap size={16} />
            <span>Most Popular</span>
          </div>

          <div className="pricing-header-content">
            <h3 className="pricing-plan-title">Subscription-Based Pricing</h3>
            <div className="pricing-amount">
              <span className="pricing-currency">Starting from</span>
              <span className="pricing-value">2000$</span>
              <span className="pricing-period">per site/month*</span>
            </div>
            <p className="pricing-note">*Final pricing based on site size, features, and project duration</p>
          </div>

          <button className="modern-btn modern-btn-primary modern-btn-large modern-btn-full" onClick={openCalendly}>
            <Calendar size={20} />
            <span>Schedule Pricing Consultation</span>
            <div className="btn-glow"></div>
          </button>

          {/* Features List */}
          <div className="pricing-features">
            <h4 className="pricing-features-title">Everything included:</h4>
            <ul className="pricing-features-list">
              {features.map((feature, index) => (
                <li key={index}>
                  <Check size={20} className="feature-check" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot Program Banner */}
          <div className="pricing-pilot-banner">
            <div className="pilot-banner-icon">🚀</div>
            <div className="pilot-banner-content">
              <h4>Early Partner Advantage</h4>
              <p>Current pilot program partners receive special pricing and priority support</p>
            </div>
          </div>

          <div className="pricing-card-glow"></div>
        </div>

        {/* Benefits Grid */}
        <div className="pricing-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="pricing-benefit-card">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h4 className="benefit-title">{benefit.title}</h4>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="pricing-custom-quote">
          <h3 className="custom-quote-title">Need a Custom Package?</h3>
          <p className="custom-quote-text">
            Large-scale projects, multi-site deployments, or specific requirements?
            <br />
            Let's discuss a tailored solution for your needs.
          </p>
          <button className="modern-btn modern-btn-secondary modern-btn-large" onClick={openCalendly}>
            <span>Get Custom Quote</span>
            <div className="btn-glow-secondary"></div>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="pricing-bg-gradient"></div>
    </section>
  );
}