const es = {
    GATag: process.env.GA_TAG,
    title: 'Pared',
    description: 'Próximamente, Pared.',
    name: 'Creado por Migala.mx',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    langDefault: 'es',
    langOptionA: 'en',
    exercise1: 'Identidad/Mentira',
}

const en = {
    GATag: process.env.GA_TAG,
    title: 'Pared',
    description: 'Coming soon, Pared.',
    name: 'Created by Migala.mx',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
    langDefault: 'en',
    langOptionA: 'es',
    exercise1: 'Identity/Lie',
}

const LANGUAGES = { es, en }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
