import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import("../locales/en.json").then((module) => module.default),
  fr: () => import("../locales/fr.json").then((module) => module.default),
};

export type DictionariesType = typeof dictionaries;
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
