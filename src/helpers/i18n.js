import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { api } from './axios'

export const SUPPORT_LOCALES = ['en', 'uz-kirl', 'uz', 'ru']

export function setupI18n(options = { locale: 'uz', legacy: true }) {
  const i18n = createI18n(options)
  const paramsLocale = options.locale
  setI18nLanguage(i18n, paramsLocale)

  // load locale messages
  loadLocaleMessages(i18n, paramsLocale)

  return i18n
}

export function setI18nLanguage(i18n, locale) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document.querySelector('html').setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n, locale) {
  // load locale messages with dynamic import
  // const messages = await import(
  //   /* webpackChunkName: "locale-[request]" */ `../translations/${locale}.js`
  // )
  const messages = await api.get(`/settings/translations/locale/${locale}`).then(res => {
    return res.data;
  })
  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages)
  return nextTick()
}
