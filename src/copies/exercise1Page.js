const {
    es: esGlobals,
    en: enGlobals,
    fr: frGlobals,
} = require('./globals')

const es = {
    ...esGlobals,
    title: 'Identidad/Mentira',
    description: 'Entre la verdad, la mentira y el sujeto sólo está el discurso. En esta pieza, los invitamos a reflexionar sobre la influencia de la identidad en la aceptación del discurso. Aquí podemos leer las ideas libres de género, de raza, número de seguidores, burbujas ideológicas, en fin, prejuicios. Se aborda distintos temas en esta conversación sin identidades, visita el sitio varias veces. Concepto de David Enríquez, dibujos de Melissa Paredes.',
    instructions: 'Pasa sobre las imágenes para ver qué se está pensando.',
}

const en = {
    ...enGlobals,
    title: 'Identity/Lie',
    description: 'Between truth, lie and being there is only the discourse. In this piece, we invite you to think about the influence of our identity in the acceptance of discourses. Here we can read some ideas free from his gender, race, followers, thought bubbles, prejudice. Distinct topics are discussed in this unidentitied conversation, so try coming here again. Concept by David Enríquez, draws by Melissa Paredes.',
    instructions: 'Hover over the images to read what is being thought.',
}

const fr = {
    ...frGlobals,
    title: 'Identité/Mesonge',
    description: 'Parmi la vérité, le mensonge et le sujet,  il n\'y a que le discours. Dans cette pièce, nous vous invitons à réfléchir à l\'influence de l\'identité sur l\'acceptation du discours. Ici, on peut lire les idées libres de genre, de race, nombre d’abonnés, bulles idéologiques, en fin, préjugés.  Différents sujets sont abordés dans cette conversation sans identités, visitez le site plusieurs fois. Idée de David Enríquez, dessins de Melissa Paredes.',
    instructions: 'Passez sur les images pour voir ce qu\'on réfléchit.',
}

const LANGUAGES = { es, en, fr }

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
