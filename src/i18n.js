import i18n from 'i18next';
    import { initReactI18next } from 'react-i18next';
    import LanguageDetector from 'i18next-browser-languagedetector';
    import enTranslation from '@/locales/en/translation.json';
    import esTranslation from '@/locales/es/translation.json';

    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        debug: false, 
        fallbackLng: 'en',
        lng: 'en', // Explicitly set default language to English
        interpolation: {
          escapeValue: false, 
        },
        resources: {
          en: {
            translation: enTranslation,
          },
          es: {
            translation: esTranslation,
          },
        },
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
          lookupLocalStorage: 'i18nextLng', // Default key i18next uses
        },
      });

    export default i18n;