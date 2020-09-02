import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import translations from "./translations";

i18n
.use(LanguageDetector)
.use(initReactI18next).init({
  fallbackLng: ["en","es","fr","de","it"],
  resources: translations,
  lng: "en",
  //debug: true,


  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
