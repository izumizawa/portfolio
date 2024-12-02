import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptbr from "./ptbr.json";
import en from "./en.json";

export const resource_ptbr = 'ptbr';

const resources = {
  "pt-BR": { 
    ptbr
  },
  "en-US": {
    en
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt-br",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;