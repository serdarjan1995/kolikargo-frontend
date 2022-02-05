import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageTR from "../languages/tr/";
import languageEN from "../languages/en/";
import languageRUS from "../languages/rus";
import languageTMEN from "../languages/tmen";

const options = {
  resources: {
    en: { translation: languageEN },
    tr: { translation: languageTR },
    rus: { translation: languageRUS },
    tmen: { translation: languageTMEN },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
};

i18n.use(initReactI18next).init(options);
