const fs = require('fs')

const statementEs = '“La muerte de un ser querido ilumina sobremanera la naturaleza visual de la fotografía” dice  Armando Silva refiriéndose a su experiencia con el álbum familiar. Cuando la muerte tocó  mi sensibilidad, esta se tradujo en recuerdo frágil, desaparición y ausencia. Una ausencia que busca ser compensada afectivamente a través de relatos y estudios de archivos familiares  como las fotografías de un álbum. Quitar, poner, rayar, cortar, velar, reordenar, volver a cortar, embalsamar, sobreponer, volver a pegar, intervenir la imagen fotográfica una y otra vez; las veces que sea necesario. Pues es ahí, en ese ejercicio, donde se desvela lo incierto, impreciso, renuente e inestable que resulta el pasado cuando se quiere recrear en el recuerdo. Un recuerdo  inagotable que se re-interpreta en cada evocación. '

module.exports.es = {
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
    addLayer: 'Agregar capa',
    removeLayer: 'Remover capa',
    warn1: 'Haz clic en los botones para quitar (-) o agregar capas (+).',
    warn2: 'Usa tu mouse o mueve con tu dedo el modelo.',
    warn3: 'Algunas capas tienen acciones adicionales al removerlas, descúbrelas.',
    warn4: 'El tiempo de carga del modelo 3d puede ser de hasta 2 minutos, tu paciencia será recompensada.',
}

module.exports.en = {
    expoDescription: statementEs,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
    addLayer: 'Add layer',
    removeLayer: 'Remove layer',
    warn1: 'Click the buttons to remove (-) or to add layers (+)',
    warn2: 'Use the mouse or move with your finger the model.',
    warn3: 'Some layers have extra  actions on remove, discover them.',
    warn4: 'The loading time of the 3d model can take around 2 minutes, your patience will be rewarded',
}

module.exports.fr = {
    expoDescription: statementEs,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
    addLayer: 'Add layer',
    removeLayer: 'Remove layer',
    warn1: 'Click the buttons to remove (-) or to add layers (+)',
    warn2: 'Use the mouse or move with your finger the model.',
    warn3: 'Some layers have extra  actions on remove, discover them.',
    warn4: 'The loading time of the 3d model can take around 2 minutes, your patience will be rewarded',
}
