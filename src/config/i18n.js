import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'cn',
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // backend option
    backend: {
      loadPath: 'http://xxx.com',
      allowMultiLoading: false,
      crossDomain: true,
      withCredentials: false,
    },

    // LanguageDetector options
    detection: {
      // order: ['localStorage', 'path'],
      order: ['path', 'localStorage'],
      lookupFromPathIndex: 0,
      // lookupLocalStorage: 'lang',
    },
  });

export default i18n;
