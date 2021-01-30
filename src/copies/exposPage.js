const fs = require('fs')
const {
  es: esGlobals,
  en: enGlobals,
  fr: frGlobals
} = require('./globals')

const es = {
    ...esGlobals,
    title: 'Expos',
}

const en = {
    ...enGlobals,
    title: 'Expos',
}

const fr = {
    ...frGlobals,
    title: 'Expos',
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
    const lang = LANGUAGES[language]
    if (!lang) {
        return es
    }

    return lang
}
