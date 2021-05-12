const fs = require('fs')

const statementEs = `En el año 2013, comencé a archivar imágenes de zonas mineras alrededor del mundo que obtenía de Panoramio, una plataforma digital vinculada a Google Earth, en la cual los usuarios subían y georreferenciaban sus fotografías. En ese año me encontraba trabajando en una empresa productora de minas, de ahí mi interés por conocer más sobre el paisaje circundante visto desde distintas perspectivas.

En enero del 2018, Google desactivó la plataforma de manera permanente, ocasionando la pérdida de millones de imágenes de las cuales no existía ningún respaldo. Esto me motivó a volver a mi archivo personal y posteriormente a mostrar de alguna manera las fotografías rescatadas. Recientemente las incorporé en un modelo 3D, que consigue envolver al espectador en una mina del tipo “a cielo abierto”, de una manera similar a como lo hubiera podido hacer en Panoramio.

La palabra panorama significa “todo lo que se ve”, pero ante una imagen disponible del mundo, lo que observamos pertenece también a ese otro mundo invisible que configura los criterios que determinan lo que se puede ver y lo que no, y que en ocasiones presentan ciertas condiciones históricas como eternas, y en otras las eliminan definitivamente. Parafraseando al artista Trevor Paglen, la imagen digital y su ideología subyacente no son solamente un orden distinto de la visualidad, sino un ejercicio de poder activo y astuto.

¿Cómo es ese ejercicio de poder que nos oculta lo que alguna vez fue visible? ¿Cuál es el valor subjetivo de lo que se queda y lo que se pierde? Me interesa pensarlo a través de las imágenes de estos fotógrafos destinadas a extinguirse, pero que se conservaron casi por azar, como si la cotidianidad de sus miradas iluminara otros panoramas: espejismos que también dejan ver un poco de lo que ocurre de manera velada en el flujo ininterrumpido de una información en la que vivimos. `

const statementEn = `In 2013, I began to file images of mining areas around the world that I obtained from Panoramio, a digital platform linked to Google Earth, in which users uploaded and geo-referenced their photographs. That year I was working in a mining production company, hence my interest in learning more about the surrounding landscape seen from different perspectives.

In January 2018, Google permanently deactivated the platform, causing the loss of millions of images of which there was no backup. This motivated me to return to my personal archive and subsequently to somehow display the rescued photographs. I recently incorporated them into a 3D model, which succeeds in enveloping the viewer in an “open pit” type of mine, in a similar way as I could have done on Panoramio.

The word panorama means “all that can be seen”, but in the face of an available image of the world, what we observe also belongs to that other invisible world that configures the criteria that determine what can be seen and what cannot, and that sometimes present certain historical conditions as eternal, and on other occasions eliminate them definitively. To paraphrase the artist Trevor Paglen, the digital image and its underlying ideology are not only a different order of visuality, but an active and astute exercise of power.

What is this exercise of power that hides from us what was once visible? What is the subjective value of what remains and what is lost? I am interested in thinking about it through the images of these photographers destined to become extinct, but which were preserved almost by chance, as if the everydayness of their gazes illuminated other panoramas: mirages that also let us see a little of what happens in a veiled way in the uninterrupted flow of information in which we live. `

const statementFr = `En 2013, j'ai commencé à classer des images de zones minières du monde entier que j'ai obtenues sur Panoramio, une plateforme numérique associée à Google Earth, sur laquelle les utilisateurs téléchargent et géoréférencent leurs photographies. Cette année-là, je travaillais dans une société de production minière, et donc j'ai voulu en savoir plus sur le paysage environnant perçu sous différents angles.

En janvier 2018, Google a désactivé définitivement la plateforme, occasionnant la perte de millions d'images dont il n'existait aucune sauvegarde. Cela m'a motivé à retourner dans mes archives personnelles et à exposer d'une certaine façon les photographies sauvées. Je les ai récemment incorporés dans un modèle 3D, qui réussit à envelopper le spectateur dans une mine de type “à ciel ouvert”, de la même manière que je l'aurais fait sur Panoramio.

Le mot panorama signifie “tout ce qu'on voit”, mais face à une image disponible du monde, ce que nous observons appartient aussi à cet autre monde invisible qui configure les critères qui déterminent ce qui peut être vu et ce qui ne peut pas l'être, et qui parfois présente certaines conditions historiques comme éternelles, et d'autres fois les élimine définitivement. Pour paraphraser l'artiste Trevor Paglen, l'image numérique et l'idéologie qui la sous-tend ne sont pas seulement un ordre différent de visualité, mais un exercice de pouvoir actif et astucieux.

Quel est cet exercice du pouvoir qui nous cache ce qui était autrefois visible ? Quelle est la valeur subjective de ce qui reste et de ce qui est perdu ? Ce qui m'intéresse, c'est d'y réfléchir à travers les images de ces photographes qui étaient destinées à s'éteindre, mais qui ont été préservées presque par hasard, comme si la quotidienneté de leurs regards illuminait d'autres panoramas : des mirages qui nous laissent aussi voir un peu de ce qui se passe de manière voilée dans le flux ininterrompu d'informations dans lequel nous vivons. `

module.exports.es = {
    instructions: 'Haz clic en las imágenes para expandirlas o cerrarlas.\nPara mover el modelo, usa las flechas de tu teclado o haz clic presionando la tecla shift o desplázate haciendo clic con dos dedos.\nPara girar la cámara, usa tu mouse o desplázate haciendo clic con un dedo.',
    expoTitle: 'El panorama ya no está disponible',
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    instructions: 'Haz clic en las imágenes para expandirlas o cerrarlas.\nPara mover el modelo, usa las flechas de tu teclado o haz clic presionando la tecla shift o desplázate haciendo clic con dos dedos.\nPara girar la cámara, usa tu mouse o desplázate haciendo clic con un dedo.',
    expoTitle: 'The panorama is no longer available',
    expoDescription: statementEn,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    instructions: 'Haz clic en las imágenes para expandirlas o cerrarlas.\nPara mover el modelo, usa las flechas de tu teclado o haz clic presionando la tecla shift o desplázate haciendo clic con dos dedos.\nPara girar la cámara, usa tu mouse o desplázate haciendo clic con un dedo.',
    expoTitle: 'The panorama is no longer available',
    expoDescription: statementFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
