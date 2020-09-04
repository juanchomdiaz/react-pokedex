// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import translations from "./i18n/translations";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: ["en", "es", "fr", "de", "it"],
  resources: translations,
  lng: "en",
  //debug: true,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
