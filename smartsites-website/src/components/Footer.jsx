// src/components/Footer.jsx - MODERN REDESIGN
import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import logo from "../assets/Opaque.png";
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="modern-footer">
      <div className="modern-footer-container">
        <div className="modern-footer-content">
          {/* Company Info */}
          <div className="footer-column footer-column-main">
            <img 
              src={logo} 
              alt="SmartSites"
              className="footer-logo"
            />
            <p className="footer-tagline">
              AI-Powered Construction Site Visibility Platform
            </p>

            <div className="footer-contact-items">
              <a href="mailto:smartsitestr@gmail.com" className="footer-contact-link">
                <Mail size={16} />
                <span>smartsitestr@gmail.com</span>
              </a>
              <div className="footer-contact-link">
                <MapPin size={16} />
                <span>Global Operations</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-column-title">Navigation</h4>
            <button onClick={() => scrollToSection('home')} className="footer-link">Home</button>
            <button onClick={() => scrollToSection('features')} className="footer-link">Features</button>
            <button onClick={() => scrollToSection('how-it-works')} className="footer-link">How It Works</button>
            <button onClick={() => scrollToSection('contact')} className="footer-link">Contact</button>
          </div>

          {/* Features */}
          <div className="footer-column">
            <h4 className="footer-column-title">Features</h4>
            <span className="footer-text">Smart Camera Monitoring</span>
            <span className="footer-text">Worker & Asset Tracking</span>
            <span className="footer-text">Material Monitoring</span>
            <span className="footer-text">AI Predictive Analytics</span>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="footer-column-title">Company</h4>
            <span className="footer-text">About Us</span>
            <span className="footer-text">Careers</span>
            <button onClick={() => scrollToSection('contact')} className="footer-link">Request Demo</button>
            <span className="footer-text">Privacy Policy</span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="modern-footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} SmartSites. All rights reserved.
            </p>
          </div>

          <button className="scroll-to-top" onClick={scrollToTop}>
            <ArrowUp size={20} />
            <span>Back to top</span>
          </button>
        </div>
      </div>

      {/* Footer Glow */}
      <div className="footer-glow"></div>
    </footer>
  );
}