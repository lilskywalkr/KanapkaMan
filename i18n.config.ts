import pl from '~/locale/pl.json'
import en from '~/locale/en.json'

export default defineI18nConfig(() => ({
  useCookie: true,
  legacy: false,
  locale: 'pl',
  locales: ['pl', 'en', 'ru', 'ua'],
  defaultLocale: 'pl',
  fallbackLocale: 'en',
  messages: {
    pl,
    en,
  },
}))
