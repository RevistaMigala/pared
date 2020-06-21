const fs = require('fs')

const es = {
    title: 'Acerca de',
    name: 'Creado por Migala.mx',
    description: fs.readFileSync('./src/copies/aboutEs.txt').toString('utf-8'),
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    exercise1: 'Identidad/Mentira',
    langDefault: 'es',
    langOptionA: 'en',
}

const en = {
    title: 'About',
    name: 'Created by Migala.mx',
    description: 'Pared, space for virtual expositions.',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
    exercise1: 'Identity/Lie',
    langDefault: 'en',
    langOptionA: 'es',
}

const LANGUAGES = { es, en }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
