const es = {
    title: 'Identidad/Mentira',
    description: 'Entre la verdad, la mentira y el sujeto sólo está el discurso. En esta pieza, los invitamos a reflexionar sobre la influencia de la identidad en la aceptación del discurso. Aquí podemos leer las ideas libres de género, de raza, número de seguidores, en fin, prejuicios. Concepto de David Enríquez, dibujos de Melissa Paredes.',
    name: 'Creado por Migala.mx',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    exercise1: 'Identidad/Mentira',
    langDefault: 'es',
    langOptionA: 'en',
    instructions: 'Pasa sobre las imágenes para ver qué se está pensando.'
}

const en = {
    title: 'Identity/Lie',
    description: 'Between truth, lie and being there is only the discourse. In this piece, we invite you to think about the influence of our identity in the acceptance of discourses. Here we can read some ideas free from his gender, race, followers, prejudice. Concept by David Enríquez, draws by Melissa Paredes.',
    name: 'Created by Migala.mx',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
    exercise1: 'Identity/Lie',
    langDefault: 'en',
    langOptionA: 'es',
    instructions: 'Hover over the images to read what is being thought.'
}

const LANGUAGES = { es, en }

module.exports = (language, poems) => {
  let poemsObject = {}
  let i = 0
  while (i < poems.length) {
      poemsObject[i] = poems[i]
      i++
  }

  const lang = LANGUAGES[language]
  if (!lang) {
      return Object.assign(es, poemsObject)
  }

  return Object.assign(lang, poemsObject)
}
