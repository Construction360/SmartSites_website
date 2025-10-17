// src/components/Features.jsx - MODERN REDESIGN
import React from 'react';
import { Camera, Users, Package, Brain, ArrowUpRight } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Camera size={32} />,
      title: "Smart Camera Monitoring",
      description: "AI-enabled cameras capture 24/7 site activity. Automatic detection of equipment, workers, and progress milestones with computer vision.",
      color: "orange",
      delay: "0s"
    },
    {
      icon: <Users size={32} />,
      title: "Worker & Asset Tracking",
      description: "Real-time location tracking via BLE/GPS sensors. Monitor safety compliance and locate equipment instantly across all zones.",
      color: "cyan",
      delay: "0.1s"
    },
    {
      icon: <Package size={32} />,
      title: "Material & Equipment Monitoring",
      description: "Know exactly where materials and equipment are located. Eliminate search time and improve resource coordination.",
      color: "purple",
      delay: "0.2s"
    },
    {
      icon: <Brain size={32} />,
      title: "AI Predictive Analytics",
      description: "Machine learning predicts delays and safety risks before they occur. Make data-driven decisions to keep projects on track.",
      color: "orange",
      delay: "0.3s"
    }
  ];

  return (
    <section id="features" className="modern-features">
      <div className="modern-features-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge">
            <span className="badge-dot"></span>
            FEATURES
          </span>
          <h2 className="section-title">
            Everything You Need to
            <span className="title-gradient"> Control Your Site</span>
          </h2>
          <p className="section-description">
            Comprehensive AI-powered platform combining computer vision, IoT sensors, 
            and predictive analytics for complete construction site visibility.
          </p>
        </div>

        {/* Features Grid */}
        <div className="modern-features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`modern-feature-card feature-${feature.color}`}
              style={{ animationDelay: feature.delay }}
            >
              <div className="feature-card-inner">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>

                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>

                <button className="feature-learn-more">
                  <span>Learn more</span>
                  <ArrowUpRight size={16} />
                </button>

                <div className="feature-card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="modern-stats-bar">
          <div className="stat-item">
            <div className="stat-number">70%</div>
            <div className="stat-label">Reduction in site visits</div>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">Real-Time</div>
            <div className="stat-label">Progress tracking</div>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Automated monitoring</div>
            <div className="stat-bar"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="features-bg-gradient"></div>
    </section>
  );
}