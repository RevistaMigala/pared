const fs = require('fs')

const statementEs = `El presente trabajo indaga las tensiones que se generan entre cultura popular y arte desde la pintura con forma de polípticos o diagramas. A partir de los vínculos afectivos o estéticos que nacen del cruce entre anécdotas personales y artículos comerciales (de consumo nacional), emblemáticos de la última década del siglo XX, la obra reflexiona sobre la educación sentimental, donde el consumo trastoca puntos neurálgicos de la construcción identitaria.

La obra hace énfasis en el género de la naturaleza muerta y el bodegón desde distintas aristas. Se explora el objeto popular y el espacio doméstico como un testigo inmóvil del relato local y la intimidad en contraste con la oficialidad del discurso universal de la Historia del Arte, reverberando los conflictos ontológicos de representación en la pintura (como la apropiación de imágenes, el trampantojo o la ilusión de la geometría ortogonal).`

const statementFr = `Le présent ouvrage analyse les tensions générées entre la culture populaire et l’art dès la peinture en forme de polyptyques ou de diagrammes. À partir des liens affectifs ou esthétiques qui découlent du croisement entre anecdotes personnelles et objets commerciaux (de consommation nationale), emblématiques de la dernière décennie du XXe siècle, l'ouvrage réfléchit sur l'éducation sentimentale, où la consommation transforme les points névralgiques de la construction identitaire.

L'œuvre met l’accent sur le genre de la nature morte sous différentes arêtes. Elle explore l'objet populaire et l'espace domestique comme un témoin immobile de l'histoire locale et de l'intimité en contraste avec la officialité du discours universel de l'histoire de l'art, qui réverbère les conflits ontologiques de la représentation en peinture (comme l'appropriation des images, le trompe-l'œil ou l'illusion de la géométrie orthogonale).`

const statementEn = `The present work investigates the tensions that are generated between popular culture and art from painting in the form of polyptychs or diagrams. From the affective or aesthetic links born from the cross between personal anecdotes and commercial items (of national consumption), emblematic of the last decade of the 20th century, the work reflects on sentimental education, where consumption disrupts neuralgic points of identity construction.

The work emphasizes the genre of still life from different edges. It explores the popular object and the domestic space as an immobile witness of the local story and intimacy in contrast to the official universal discourse of Art History, reverberating the ontological conflicts of representation in painting (such as the appropriation of images, the trompe-l'oeil or the illusion of orthogonal geometry).`

module.exports.es = {
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
    piece1: '(RECETA DEL HOSPITAL GENERAL) · Alejandra D. H.  - 12 febr. 2015 / Hospital General',
    piece2: '(RECETA ROSA DEL IMSS) · Ma. E.  Abarca Tortolero - s/f -IMSS',
    piece3: '(RECETA VERDE DEL ESTADO DE MÉXICO) · Coca Soriano - 6 en. 2015 - ISSEMYM',
    piece4: '(RECETA DEL INP) · Alejandra González Ch. - s/f - INP',
    pieceDescription: 'Receta médica intervenida con óleo',
}

module.exports.fr = {
    expoDescription: statementFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
    piece1: '(ORDONNANCE MÉDICALE HOSPITALIÈRE GÉNÉRALE) · Alejandra D. H. - 12 févr. 2015 / Hôpital général',
    piece2: '(ORDONNANCE MÉDICALE IMSS ROSE) · Ma. E. Abarca Tortolero - Sans date -IMSS',
    piece3: '(ORDONNANCE MÉDICALE VERTE DE L\ÉTAT DU MEXIQUE) · Coca Soriano - 6 janv. 2015 - ISSEMYM',
    piece4: '(ORDONNANCE MÉDICALE DE L\'INP) · Alejandra González Ch. - Sans date - INP',
    pieceDescription: 'Ordonnance médicale intervenue à l’huile',
}

module.exports.en = {
    expoDescription: statementFr,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
    piece1: '(GENERAL HOSPITAL PRESCRIPTION) · Alejandra D. H. - 12 Feb. 2015 / General Hospital',
    piece2: '(PINK IMSS PRESCRIPTION) · Ma. E. Abarca Tortolero - Undated -IMSS',
    piece3: '(GREEN PRESCRIPTION FROM THE STATE OF MEXICO) · Coca Soriano - 6 Jan. 2015 - ISSEMYM',
    piece4: '(INP\'S PRESCRIPTION) · Alejandra González Ch. - Undated - INP',
    pieceDescription: 'Medical prescription treated with oil',
}
