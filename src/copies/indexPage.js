const fs = require('fs')
const {
  es: esGlobals,
  en: enGlobals,
  fr: frGlobals
} = require('./globals')
const {
  es: esExpo,
  en: enExpo,
  fr: frExpo
} = require('./partials/expoAlejandraAguilar')

const es = {
    ...esGlobals,
    ...esExpo,
}

const en = {
    ...enGlobals,
    ...enExpo,
}

const fr = {
    ...frGlobals,
    ...frExpo,
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
