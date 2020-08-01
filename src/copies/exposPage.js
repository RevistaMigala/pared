const fs = require('fs')
const {
  es: esGlobals,
  en: enGlobals,
  fr: frGlobals
} = require('./globals')

const es = {
    ...esGlobals,
}

const en = {
    ...enGlobals,
}

const fr = {
    ...frGlobals,
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
