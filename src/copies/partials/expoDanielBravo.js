const fs = require('fs')

const statementEs = `Hueyotenco es una pieza de exploración multimedia que está compuesta por momentos, diferentes temporalidades que compenetran en un mismo espacio y que a través de eso, Daniel Bravo busca rescatar y recrear memorias, recuerdos y continuar con este intento de encontrarse y dialogar con su abuelo partiendo de preguntarse: ¿Cuál fue ese primero encuentro con él?

El artista regresa al archivo personal tratando de encontrar el inicio, ese primer contacto con Emiliano Jiménez Cuapio. Esta pieza es un recorrido y un viaje, donde a partir de re-construir archivo familiar: fotografías de su familia y de la casa que habitan, fotos personales de su infancia, paisaje sonoro y video, Daniel Bravo recrea una nueva imagen de su abuelo, de su memoria familiar y así, comienza re-crearse así mismo.

Esta pieza es un tetris. Un collage, donde de la fragmentación se presenta como parte fundamental para entender la compenetración de los tiempos no lineales, que juegan y se cruzan entre sí convertidos en memorias. Las postales son un laberinto que se transita como saltos en el tiempo, jugando con las imágenes, con los hipervínculos, donde la composición y el acomodo de las mismas, se vuelven un juego con una narrativa flexible, para encontrar la mejor manera de acercarse a su propio origen y hablar de los elementos que lo constituyen.

Constructos, la memoria como un signo del tiempo, son conceptos con lo que, a través de entremezclar elementos,  Daniel Bravo expande su trabajo de investigación y lo vuelve una conversación personal con su abuelo, con su familia, con el espectador a quien invita a formar parte de este recorrido de reconstrucción y proyectarnos, y con suerte, reflejar nuestras propias memorias.

Con Hueyotenco, Daniel Bravo se encuentra con la fortuna de saberse parte del imaginario de su abuelo, que construía proyectando a futuro una familia como una utopía, como un paradigma. Al transitar por esta pieza, Bravo se encuentra un horizonte, comienza otro camino partiendo ahora de saber la respuesta a la pregunta inicial:

El primero encuentro fue él mismo. La casa es él, su familia es él, su abuelo es él.

Yatziri Herrera.
`

const statementEn = statementEs

const statementFr = statementEs

module.exports.es = {
    instructions: 'Esta pieza se plantea como un collage interactivo en el que cada uno de los elementos que integran el collage puede conducir a una postal que puede incluir una fotografía intervenida o un video. De esta forma, dando clic a la flecha de color rojo se puede acceder a una postal diferente de manera aleatoria, generando una narrativa distinta de acuerdo a los hipervínculos seleccionados.',
    expoTitle: 'Hueyotenco',
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    instructions: 'Esta pieza se plantea como un collage interactivo en el que cada uno de los elementos que integran el collage puede conducir a una postal que puede incluir una fotografía intervenida o un video. De esta forma, dando clic a la flecha de color rojo se puede acceder a una postal diferente de manera aleatoria, generando una narrativa distinta de acuerdo a los hipervínculos seleccionados.',
    expoTitle: 'Hueyotenco',
    expoDescription: statementEn,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    instructions: 'Esta pieza se plantea como un collage interactivo en el que cada uno de los elementos que integran el collage puede conducir a una postal que puede incluir una fotografía intervenida o un video. De esta forma, dando clic a la flecha de color rojo se puede acceder a una postal diferente de manera aleatoria, generando una narrativa distinta de acuerdo a los hipervínculos seleccionados.',
    expoTitle: 'Hueyotenco',
    expoDescription: statementFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
