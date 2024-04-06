import translations from './translations'
import { I18n } from "i18n-js";
import en from "i18n-js/json/en.json";
import es from "i18n-js/json/es.json";

const i18nInstance = new I18n({
  en: {
    ...en,
    ...translations.en,
  },
  es: {
    ...es,
    ...translations.es,
  },
});

i18nInstance.defaultLocale = 'es';
i18nInstance.locale = 'es';
i18nInstance.availableLocales = ['en', 'es']

export const i18n = i18nInstance;
