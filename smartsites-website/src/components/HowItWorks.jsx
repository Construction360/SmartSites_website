// src/components/HowItWorks.jsx - MODERN REDESIGN
import React from 'react';
import { Camera, Cpu, Monitor, Bell, Check } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <Camera size={40} />,
      title: "Deploy Smart Cameras",
      description: "Install AI-enabled cameras and IoT sensors across your site. Quick setup with minimal disruption.",
      features: ["5G connectivity", "Weatherproof design", "24/7 operation"]
    },
    {
      number: "02",
      icon: <Cpu size={40} />,
      title: "AI Processes Data",
      description: "Computer vision analyzes site activity in real-time, detecting workers, equipment, and progress.",
      features: ["Object detection", "Activity recognition", "Pattern analysis"]
    },
    {
      number: "03",
      icon: <Monitor size={40} />,
      title: "Monitor Dashboard",
      description: "Access unified dashboard from anywhere. Track progress, locations, and equipment status.",
      features: ["Live feeds", "Progress tracking", "Resource monitoring"]
    },
    {
      number: "04",
      icon: <Bell size={40} />,
      title: "Receive Alerts",
      description: "Get instant notifications for delays, safety incidents, or equipment issues.",
      features: ["Smart alerts", "Mobile notifications", "Email reports"]
    }
  ];

  return (
    <section id="how-it-works" className="modern-howitworks">
      <div className="modern-howitworks-container">
        {/* Header */}
        <div className="modern-section-header">
          <span className="section-badge section-badge-cyan">
            <span className="badge-dot"></span>
            HOW IT WORKS
          </span>
          <h2 className="section-title">
            From Installation to Insights
            <span className="title-gradient"> in 4 Simple Steps</span>
          </h2>
          <p className="section-description">
            SmartSites integrates seamlessly with your workflow, 
            providing immediate value from day one.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="modern-steps-timeline">
          {steps.map((step, index) => (
            <div key={index} className="modern-step-card">
              <div className="step-number-badge">
                <span>{step.number}</span>
                <div className="badge-pulse"></div>
              </div>

              <div className="step-icon-circle">
                {step.icon}
                <div className="icon-circle-glow"></div>
              </div>

              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>

                <ul className="step-features">
                  {step.features.map((feature, idx) => (
                    <li key={idx}>
                      <Check size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-dot"></div>
                </div>
              )}

              <div className="step-card-glow"></div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        
      </div>

      {/* Background */}
      <div className="howitworks-bg-grid"></div>
    </section>
  );
}