const {
    es: esGlobals,
    en: enGlobals,
    fr: frGlobals,
} = require('./globals')

const es = {
    ...esGlobals,
    title: 'Registros para las expos',
    description: 'Sube aquí las imágenes para alguna expo',
    required: 'Todos los campos son requeridos',
    creator_name: 'Nombre del autor del texto',
    image_name: 'Nombre de la imagen',
    text: 'Texto para la imagen',
    image: 'Imagen',
    send: 'Enviar',
    langDefault: 'es',
    langOptionA: 'fr',
    langOptionB: 'en',
}

const en = {
    ...esGlobals,
    title: 'Registros para las expos',
    description: 'Sube aquí las imágenes para alguna expo',
    required: 'Todos los campos son requeridos',
    creator_name: 'Nombre del autor del texto',
    image_name: 'Nombre de la imagen',
    text: 'Texto para la imagen',
    image: 'Imagen',
    send: 'Enviar',
    langDefault: 'es',
    langOptionA: 'fr',
    langOptionB: 'en',
}

const fr = {
    ...esGlobals,
    title: 'Registros para las expos',
    description: 'Sube aquí las imágenes para alguna expo',
    required: 'Todos los campos son requeridos',
    creator_name: 'Nombre del autor del texto',
    image_name: 'Nombre de la imagen',
    text: 'Texto para la imagen',
    image: 'Imagen',
    send: 'Enviar',
    langDefault: 'es',
    langOptionA: 'fr',
    langOptionB: 'en',
}

const LANGUAGES = { es, en, fr }

module.exports = (language) => {
  const lang = LANGUAGES[language]
  if (!lang) {
      return es
  }

  return lang
}
