import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './src/locales/en.json';
import translationES from './src/locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      es: { translation: translationES },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;