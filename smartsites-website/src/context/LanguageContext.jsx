// src/context/LanguageContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  // Get initial language from localStorage or browser settings
  const getInitialLanguage = () => {
    const saved = localStorage.getItem('smartsites-language');
    if (saved) return saved;
    
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('tr')) return 'tr';
    if (browserLang.startsWith('ru')) return 'ru';
    if (browserLang.startsWith('ar')) return 'ar';
    if (browserLang.startsWith('de')) return 'de';
    return 'en';
  };

  const [language, setLanguage] = useState(getInitialLanguage());

  const languages = {
    en: { name: 'English', flag: '🇬🇧', dir: 'ltr' },
    tr: { name: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
    ru: { name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
    ar: { name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
    de: { name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' }
  };

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    localStorage.setItem('smartsites-language', newLang);
    // Update document direction for RTL languages
    document.documentElement.dir = languages[newLang].dir;
    document.documentElement.lang = newLang;
  };

  // Set initial direction
  useEffect(() => {
    document.documentElement.dir = languages[language].dir;
    document.documentElement.lang = language;
  }, []);

  const value = {
    language,
    changeLanguage,
    languages,
    isRTL: languages[language].dir === 'rtl'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};