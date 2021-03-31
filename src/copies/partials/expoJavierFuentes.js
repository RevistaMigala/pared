const fs = require('fs')

const statementEs = `La propuesta de esta exposición es una actividad que “activa” el espectador. Que lo invita a reflexionar sobre el andar, sobre el paisaje y sobre su entorno. ¿Como? Interviniendo en él.  Siempre estamos interviniendo en él, consciente o inconscientemente. Lo armamos, desarmamos y reconstruimos constantemente con nuestros recorridos, nuestras miradas y nuestras acciones físicas sobre él.

La intervención que se propone por medio de esta actividad es la de utilizar una serie de filtros realizados por distintos artistas dentro de la plataforma Instagram. ¿Por qué? Porque desde hace algún tiempo estamos habituados a interactuar con ella, nos comunicamos desde ella y hemos entendido su lenguaje y lo hemos integrado a nuestra cotidianidad.

Momentary Things alberga una colección de filtros realizados en colaboración por varios artistas, para su uso en el entorno. También es una colección de los registros realizados por los que han usado estos filtros. Momentary Things no solo existirá en el tiempo que dure esta exposición, sino también será un espacio cotidiano que albergará Instagram el tiempo que perdure su interacción con las personas interesadas en usar sus elementos.`

const statementFr = `La proposition de cette exposition est une activité qui “déclenche” le spectateur. Qui l’invite à réfléchir sur  la marche, sur le paysage et sur son environnement. Comment ? En intervenant en lui. Nous y intervenons en permanence, conscient ou inconsciemment. Nous le montons, nous le démontons et nous le reconstruisons constamment dans nos trajets, dans nos regards et dans nos actes physiques.

L’intervention que nous proposons à travers cette activité consiste à utiliser une série de filtres réalisés par différents artistes sur la plateforme Instagram. Pourquoi ? Parce que depuis un certain temps nous avons l’habitude d’interagir avec elle, nous nous communiquons à travers elle, nous avons compris son langage et nous l’avons intégré à notre quotidien.

Momentary Things abrite une collection de filtres réalisés en collaboration avec plusieurs artistes, pour son usage dans l’environnement. C’est aussi une collection de registres réalisés par ceux qui ont utilisé ces filtres. Momentary Things n’existera pas seulement pendant l’exposition, mais il sera également un espace quotidien qu’ Instagram accueillera le temps que durera son interaction avec les personnes intéressées à utiliser ses éléments.
`

const statementEn = `The proposal of this exhibition is an activity that “activates” the spectator. It invites him/her to reflect on the walk, on the landscape and on his/her environment. How? By intervening in it. We are always intervening in it, consciously or unconsciously. We assemble, disassemble and reconstruct it constantly with our walks, our looks and our physical actions on it.

The intervention proposed through this activity is to use a series of filters made by different artists within the Instagram platform. Why? Because for some time now we have been used to interacting with it, we communicate with it and we have understood its language and have integrated it into our daily lives.

Momentary Things houses a collection of filters made collaboratively by various artists, for use in the environment. It is also a collection of the records made by those who have used these filters. Momentary Things will not only exist for the duration of this exhibition, but it will also be an everyday space that will host Instagram for as long as its interaction with people interested in using its elements lasts.
`

module.exports.es = {
    expoTitle: 'Momentary Things',
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    expoTitle: 'Momentary Things',
    expoDescription: statementEn,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    expoTitle: 'Momentary Things',
    expoDescription: statementFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
