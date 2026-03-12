import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./languages/ar.json";
import enUS from "./languages/en-US.json";
import esES from "./languages/es-ES.json";
import frFR from "./languages/fr-FR.json";
import ptBR from "./languages/pt-BR.json";

const RTL_LANGUAGES = ["ar"];

const updateDocumentDirection = (lng: string) => {
  const dir = RTL_LANGUAGES.includes(lng) ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
};

i18n.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: enUS,
    },
    "pt-BR": {
      translation: ptBR,
    },
    "es-ES": {
      translation: esES,
    },
    "fr-FR": {
      translation: frFR,
    },
    ar: {
      translation: ar,
    },
  },
  lng: localStorage.getItem("i18nextLng") || "en-US",
  fallbackLng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

// Set initial direction
updateDocumentDirection(i18n.language);

// Update direction on language change
i18n.on("languageChanged", updateDocumentDirection);

export default i18n;
