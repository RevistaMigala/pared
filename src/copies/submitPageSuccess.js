const es = {
    title: 'Postúlate',
    description: 'Recibimos tu solicitud correctamente. Pronto te contactaremos.',
    name: 'Migala.mx',
    link: 'https://migala.mx',
    submit: 'Postúlate',
    about: 'Acerca de',
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
    description: 'Your submit was successfully received. We will contact you soon.',
    title: 'Submit',
    name: 'Migala.mx',
    link: 'https://migala.mx',
    submit: 'Submit',
    about: 'About',
    required: 'All fileds are required',
    artist_name: 'Artist´s name',
    project_name: 'Proyect´s name',
    contact_email: 'Contact email',
    artist_age: 'Artist´s age',
    artist_city: 'Artist´s city',
    project_description: 'Proyect´s description',
    images_folder_url: 'Image folder URL',
    folder_description: 'Please include a folders link URL where we can see some of the work that you want to show.',
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
