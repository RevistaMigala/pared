const fs = require('fs')

module.exports.es = {
    expoDescription: fs.readFileSync('./src/copies/partials/expoAdrianGonzalezDescriptionEs.txt').toString('utf-8'),
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.'
}

module.exports.en = {
    expoDescription: fs.readFileSync('./src/copies/partials/expoAdrianGonzalezDescriptionEn.txt').toString('utf-8'),
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.'

}

module.exports.fr = {
    expoDescription: fs.readFileSync('./src/copies/partials/expoAdrianGonzalezDescriptionFr.txt').toString('utf-8'),
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.'
}
