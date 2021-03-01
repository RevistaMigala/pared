const fs = require('fs')

const statementEs = `
Trabajar constantemente con la idea de la repetición en la producción de imágenes desde la pintura y la gráfica, me llevó en determinado momento a plantearme desarrollar piezas en gran escala numérica, apelando a la manera en que se maquila la publicidad impresa en el ámbito de la cultura de masas, en las que a través de la reproducción de un esquema y breves instrucciones, hiciera posible emular algunos procesos de producción de mi propio trabajo.

Numerales es una serie gráfica que alterna procedimientos digitales, manuales y mecánicos, conformada por la edición de múltiples desarrollados de manera seriada a partir de procesos de impresión a gran escala, como el offset, la serigrafía o la impresión digital, para llevar a cabo la edición de posters, postales y volantes que reproducen esquemas de paisajes alterados digitalmente e incluyen instrucciones para poder ser intervenidos o modificados por sujetos externos, emulando los manuales de pintura por números.

Dichos múltiples cuentan con cortas ediciones numeradas e intervenidas por el autor y el resto son de distribución gratuita al ser exhibidos en espacios de legitimación artística como museos, galerías o espacios independientes.

Numerales V es el quinto de siete múltiples que conformarán el total de la serie, y ha sido planeado ex profeso para exhibirse de manera digital, por lo que contará con algunas variaciones desarrolladas personalmente, y el esquema original para descarga gratuita, de manera que pueda ser impreso por el espectador, intervenido y vuelto a cargar en la página, para su adición a la colección que conforma la muestra.
`

const statementEn = ''

const statementFr = ''

module.exports.es = {
    expoTitle: 'Numerales V',
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    expoTitle: 'Numerals V',
    expoDescription: statementEs,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    expoTitle: 'Numerals V',
    expoDescription: statementEs,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
