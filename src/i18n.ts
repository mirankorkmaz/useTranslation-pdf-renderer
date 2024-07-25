import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import moment from "moment";
import "moment/locale/sv";

export const languages = ["sv", "en"];

const langKey = "PORTAL_LANG";
const initialLang = window.localStorage.getItem(langKey) || "sv";

moment.locale(initialLang);

export const i18nLoading = i18n
  .use(Backend)
  .use(initReactI18next)
  .init({ debug: true, lng: initialLang, fallbackLng: "sv" });

export const setLanguage = (lang: string) => {
  if (!languages.includes(lang)) {
    throw new Error(`Language "${lang}" is not avaliable`);
  }
  window.localStorage.setItem(langKey, lang);
  moment.locale(lang);
  return i18n.changeLanguage(lang);
};

export const getLanguage = () => i18n.language;
