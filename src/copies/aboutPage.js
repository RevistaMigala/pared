const fs = require('fs')
const {
    es: esGlobals,
    en: enGlobals,
    fr: frGlobals,
} = require('./globals')

const es = {
    ...esGlobals,
    title: 'Acerca de',
    description: fs.readFileSync('./src/copies/aboutEs.txt').toString('utf-8'),
}

const en = {
    ...enGlobals,
    title: 'About',
    description: fs.readFileSync('./src/copies/aboutEn.txt').toString('utf-8'),
}

const fr = {
    ...frGlobals,
    title: 'À propos de',
    description: fs.readFileSync('./src/copies/aboutFr.txt').toString('utf-8'),
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
