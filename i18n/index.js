import en from "./en.js";
import es from "./es.js";
import pt from "./pt.js";

export function changeLanguage(lang) {
  switch (lang) {
    case "en":
      return en;
    case "es":
      return es;
    case "pt":
      return pt;
    default:
      return en;
  }
}

export function init() {
  let langNavigator = navigator.language || "en";
  langNavigator = langNavigator.split("-")[0];
  return window.localStorage.getItem("lang") || langNavigator;
}
