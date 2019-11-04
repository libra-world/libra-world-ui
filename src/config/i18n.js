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
    debug: true,
    // defaultNS: 'default',
    // ns: 'default',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // backend option
    // backend: {
    //   loadPath: '/api/translation/{{lng}}.json',
    //   allowMultiLoading: false,
    //   crossDomain: true,
    //   withCredentials: false,
    // },

    // LanguageDetector options
    detection: {
      // order: ['localStorage', 'path'],
      order: ['path', 'localStorage'],
      lookupFromPathIndex: 0,
      // lookupLocalStorage: 'lang',
    },
  });

// i18n.addResourceBundle('en', 'default', require('../locales/en'));
// i18n.addResourceBundle('cn', 'default', require('../locales/cn'));

export default i18n;
