import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './fr/fr.json'
import en from './en/en.json'
const resources = {
  fr,
  en
}

// const deviceLocale = truncate(RNLocalize.getLocales()[0].languageTag, 2, '')

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    resources,

    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n
