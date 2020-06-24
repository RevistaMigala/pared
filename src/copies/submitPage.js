const {
    es: esGlobals,
    en: enGlobals,
    fr: frGlobals,
} = require('./globals')

const es = {
    ...esGlobals,
    title: 'Postúlate',
    description: 'Postula tu trabajo para exponerlo en Pared. Llena el siguiente formulario. Presenta un proyecto pensado específicamente para el sitio. Evaluaremos tu propuesta y nos pondremos en contacto contigo.',
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
    langOptionA: 'fr',
    langOptionB: 'en',
}

const en = {
    ...enGlobals,
    title: 'Submit',
    description: 'Submit your work to show it in Pared. Fill the next form. Submit a project developed especifically for this site. We will evaluate your project and contact you soon.',
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
    langOptionB: 'fr',
}

const fr = {
    ...frGlobals,
    title: 'Postulez',
    description: 'Postulez votre travail pour l’exposer sur Pared. Remplissez le formulaire suivant. Présenter un projet conçu spécialement pour ce cite. Nous évaluerons votre proposition et nous vous contacterons.',
    required: 'Tous le champs requis',
    artist_name: 'Nom de l’artiste',
    project_name: 'Nom du projet',
    contact_email: 'Courriel',
    artist_age: 'Âge de l’artiste',
    artist_city: 'Ville de l’artiste',
    project_description: 'Description du projet',
    images_folder_url: 'URL du dossier d’images.',
    folder_description: 'Joignez l’URL d’un dossier où nous pouvons voir un échantillon d’images à exposer.',
    send: 'Envoyer',
    langDefault: 'fr',
    langOptionA: 'es',
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
