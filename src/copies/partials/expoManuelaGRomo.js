const fs = require('fs')

const statementEs = `Proyecto Casa propia propone reflexionar sobre la posibilidad ritual de la enunciación/representación como una manera de asir y recuperar los espacios que habitamos.
El proyecto consta de dos momentos: en su inicio busca generar un archivo de descripciones afectivas de los espacios que habitamos; posteriormente, los textos serán interpretados/intervenidos/retomados a través de distintas salidas plásticas y visuales por Manuela G. Romo.
Las imágenes resultantes y los textos (o fragmentos) serán mostradas en el espacio virtual de PARED durante el mes de enero del 2021. Los fragmentos de los textos publicados en la exposición pueden ser anónimos a elección de sus creadorxs.
Si te interesa participar en Proyecto Casa propia, envía una breve descripción afectiva (máximo 800 caracteres con espacios) del espacio donde habitas a p.casa.propia@gmail.com a partir del 15 de diciembre y en el transcurso del mes de enero. La idea del proyecto es retomar tantas descripciones afectivas como sea posible; sin embargo, por cuestiones de tiempo, no podemos comprometernos a trabajar con todas.
`
module.exports.es = {
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    expoDescription: statementEs,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    expoDescription: statementEs,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
