const es = {
    title: 'Pared',
    description: 'Próximamente, Pared.',
    name: 'Migala.mx',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    langDefault: 'es',
    langOptionA: 'en',
}

const en = {
    title: 'Pared',
    description: 'Coming soon, Pared.',
    name: 'Migala.mx',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
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
