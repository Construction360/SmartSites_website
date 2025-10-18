// src/components/FAQ.jsx
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import '../styles/FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How long does it take to deploy SmartSites on my construction site?",
      answer: "Installation is quick and non-disruptive. Our team can have cameras and sensors operational within 3-5 business days. The platform is accessible immediately after hardware installation, and your team can start monitoring from day one."
    },
    {
      question: "What happens if there's no internet connection on site?",
      answer: "SmartSites works with 4G/5G cellular connectivity, so traditional internet infrastructure isn't required. Our cameras have built-in cellular modems and can operate independently. Data is automatically synced when connectivity is restored, ensuring no gaps in monitoring."
    },
    {
      question: "Is my project data secure? Who has access to the footage?",
      answer: "Data security is our top priority. All footage and data is encrypted end-to-end and stored on secure cloud servers with GDPR compliance. Only authorized personnel from your organization have access through unique login credentials. We never share or sell your data to third parties."
    },
    {
      question: "Do I need to train my team to use SmartSites?",
      answer: "The platform is designed to be intuitive and user-friendly. We provide a 1-hour onboarding session for your team, and most users are comfortable within the first day. Our support team is also available via phone and email for any questions."
    },
    {
      question: "What if I have multiple construction sites?",
      answer: "SmartSites is built for multi-site management. You can monitor all your projects from a single dashboard, switching between sites instantly. We offer volume discounts for companies managing multiple sites simultaneously. Contact us for enterprise pricing."
    },
    {
      question: "Can SmartSites integrate with our existing project management software?",
      answer: "Yes! SmartSites offers API integrations with popular construction management platforms like Procore, PlanGrid, and others. We can also develop custom integrations based on your specific tech stack. Our team will work with you during onboarding to ensure seamless integration."
    },
    {
      question: "What's included in the monthly subscription?",
      answer: "Everything! Your subscription includes all hardware (cameras, sensors), software platform access, cloud storage, AI analytics, mobile app, regular software updates, and technical support. There are no hidden fees or surprise costs."
    },
    {
      question: "How is SmartSites different from regular security cameras?",
      answer: "Traditional security cameras only record footage passively. SmartSites uses AI-powered computer vision to actively analyze what's happening on your site—detecting workers, equipment, progress milestones, and safety risks in real-time. You get actionable insights and alerts, not just video footage. Plus, we integrate worker tracking, digital twins, and predictive analytics in one platform."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, absolutely. We offer month-to-month subscriptions with no long-term contracts. You can cancel anytime with 30 days' notice. We believe in earning your business every month through excellent service, not locking you into lengthy commitments."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        {/* Header */}
        <div className="faq-header">
          <span className="section-badge section-badge-purple">
            <span className="badge-dot"></span>
            FAQ
          </span>
          <h2 className="section-title">
            Questions?
            <span className="title-gradient"> We've Got Answers</span>
          </h2>
          <p className="section-description">
            Everything you need to know about SmartSites.
            <br />
            Can't find what you're looking for? Schedule a call with our team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <HelpCircle size={24} className="faq-icon" />
                <span className="faq-question-text">{faq.question}</span>
                <ChevronDown 
                  size={24} 
                  className={`faq-chevron ${openIndex === index ? 'rotated' : ''}`}
                />
              </button>
              
              <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>

              <div className="faq-item-glow"></div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="faq-cta">
          <h3 className="faq-cta-title">Still have questions?</h3>
          <p className="faq-cta-text">
            Our team is here to help. Schedule a call to discuss your specific needs.
          </p>
          <button 
            className="modern-btn modern-btn-primary modern-btn-large"
            onClick={() => {
              if (window.Calendly) {
                window.Calendly.initPopupWidget({
                  url: 'https://calendly.com/smartsitestr/30min'
                });
              }
            }}
          >
            <span>Talk to Our Team</span>
            <div className="btn-glow"></div>
          </button>
        </div>
      </div>

      {/* Background */}
      <div className="faq-bg-gradient"></div>
    </section>
  );
}