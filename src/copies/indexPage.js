const {
  es: esGlobals,
  en: enGlobals,
  fr: frGlobals
} = require('./globals')

const es = {
    ...esGlobals,
    description: 'Próximamente, Pared.',
}

const en = {
    ...enGlobals,
    description: 'Coming soon, Pared.',
}

const fr = {
    ...frGlobals,
    description: 'Bientôt, Pared.',
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
