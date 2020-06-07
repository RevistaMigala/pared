const es = {
    title: 'Acerca de',
    name: 'Migala.mx',
    description: 'Pared, espacio de exposiciones virtuales.',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    langDefault: 'es',
    langOptionA: 'en',
}

const en = {
    title: 'About',
    name: 'Migala.mx',
    description: 'Pared, space for virtual expositions.',
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
