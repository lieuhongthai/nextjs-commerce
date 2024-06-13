export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fr"],
} as const;

export type TLocale = (typeof i18n)["locales"][number];
