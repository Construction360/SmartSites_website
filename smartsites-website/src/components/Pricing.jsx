// src/components/Pricing.jsx
import React from 'react';
import { Check, Calendar, Zap, ShieldCheck, Shield, Smartphone } from 'lucide-react';
import '../styles/Pricing.css';

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
      description: "Flexible subscriptions, cancel anytime"
    },
    {
      icon: <Shield size={24} />,
      title: "All-Inclusive",
      description: "Hardware, software & support included"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Quick Deployment",
      description: "Go live on your site in days"
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
            Customized & Scalable
            <span className="title-gradient"> Solutions</span>
          </h2>
          <p className="section-description">
            Flexible plans designed for construction projects of all sizes, everywhere.
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
            <h3 className="pricing-plan-title">Tailored Pricing for Your Project</h3>
            <p className="pricing-note">
              Our pricing is customized based on your project's unique scale, features, and operational region. We build a plan that fits your needs and budget.
            </p>
          </div>

          <button className="modern-btn modern-btn-primary modern-btn-large modern-btn-full" onClick={openCalendly}>
            <Calendar size={20} />
            <span>Get a Custom Quote</span>
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
            <div className="pilot-banner-icon">  <ShieldCheck size={34} /> </div>
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
          <h3 className="custom-quote-title">Need an Enterprise Package?</h3>
          <p className="custom-quote-text">
            Large-scale projects, multi-site deployments, or specific requirements?
            <br />
            Let's discuss a tailored solution for your needs.
          </p>
          <button className="modern-btn modern-btn-secondary modern-btn-large" onClick={openCalendly}>
            <span>Request Enterprise Quote</span>
            <div className="btn-glow-secondary"></div>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="pricing-bg-gradient"></div>
    </section>
  );
}