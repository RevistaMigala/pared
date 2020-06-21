const es = {
    GATag: process.env.GA_TAG,
    description: 'Hubo un error al recibir tu solicitud. Por favor intenta de nuevo después.',
    title: 'Postúlate',
    name: 'Creado por Migala.mx',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
    exercise1: 'Identidad/Mentira',
    required: 'Todos los campos son requeridos',
    artist_name: 'Nombre del artista',
    project_name: 'Nombre del proyecto',
    contact_email: 'Email de contacto',
    artist_age: 'Edad del artista',
    artist_city: 'Ciudad del artista',
    project_description: 'Descripción del proyecto',
    images_folder_url: 'Url de carpeta de imágenes',
    folder_description: 'Adjunta la url de una carpeta donde podamos ver una muestra de imágenes para exponer.',
    send: 'Enviar',
    langDefault: 'es',
    langOptionA: 'en',
}

const en = {
    GATag: process.env.GA_TAG,
    description: 'There was an error storing your submit. Please try again later.',
    title: 'Submit',
    name: 'Created by Migala.mx',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
    exercise1: 'Identity/Lie',
    required: 'All fileds are required',
    artist_name: 'Artist´s name',
    project_name: 'Proyect´s name',
    contact_email: 'Contact email',
    artist_age: 'Artist´s age',
    artist_city: 'Artist´s city',
    project_description: 'Proyect´s description',
    images_folder_url: 'Image folder URL',
    folder_description: 'Please include a folder´s link URL where we can see some of the work that you want to show.',
    send: 'Submit',
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
