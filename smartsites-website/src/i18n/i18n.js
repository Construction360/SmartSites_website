// src/i18n/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import trTranslations from './locales/tr.json';
import arTranslations from './locales/ar.json';

const resources = {
  en: {
    translation: enTranslations
  },
  tr: {
    translation: trTranslations
  },
  ar: {
    translation: arTranslations
  }
};

i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    
    interpolation: {
      escapeValue: false // React already escapes values
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;