// src/App.jsx - WITH PRICING & FAQ SECTIONS
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import './styles/website.css';
import './styles/Global.css';

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>SmartSites - AI Powered Construction Monitoring</title>
        <meta name="description" content="Transform your construction site with SmartSites. standard 24/7 AI monitoring, real-time analytics, and automated progress tracking." />
        <link rel="canonical" href="https://smartsitescons.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smartsitescons.com/" />
        <meta property="og:title" content="SmartSites - AI Powered Construction Monitoring" />
        <meta property="og:description" content="Transform your construction site with SmartSites. standard 24/7 AI monitoring, real-time analytics, and automated progress tracking." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SmartSites",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "AI-powered construction site monitoring and analytics platform."
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SmartSites",
              "url": "https://smartsitescons.com",
              "logo": "https://smartsitescons.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-555-5555",
                "contactType": "customer service"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="app">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Features />
        <HowItWorks />
        <Pricing />      {/* NEW - Pricing Section */}
        <FAQ />          {/* NEW - FAQ Section */}
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;