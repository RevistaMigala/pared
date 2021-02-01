const fs = require('fs')

const statementEs = `El trabajo de Helio Santos se desarrolla desde una aproximación poética y crítica en el uso de la información, las problemáticas sociopolíticas, el internet y los medios audiovisuales. Se interesa por el uso de la tecnología en el arte y la vida cotidiana para generar preguntas y reflexiones sobre nuestro cuerpo, conocimientos y formas de relacionarnos con el entorno y lo seres vivos.

El proyecto está compuesto por un un algoritmo que genera paisajes y un Twitterbot. Estas imágenes se crean a partir de una base de datos de pinturas de libre acceso que pertenecen a colecciones de museos como el MET (Museo Metropolitano de Nueva York), el Instituto de Arte de Chicago y el Museo del Prado. A partir de esto, el bot identifica, separa y clasifica los diferentes elementos que conforman el paisaje como: cielo, vegetación, terreno, nubes... mediante algoritmos de machine learning y computer vision, para posteriormente recomponer imágenes que completa y reconfigura en nuevos paisajes, conjugados con territorios virtuales modelados y programados en GLSL y Processing para finalmente constituir un dataset de una red neuronal que genera los nuevos paisajes. Estos resultados son pintados al óleo por una máquina.
`

const statementEn = `Helio Santos' work is developed from a poetic and critical approach to the use of information, socio-political issues, the internet and audiovisual media. He is interested in the use of technology in art and daily life, to generate questions and reflections about our body, knowledge and ways of relating to the environment and living beings.

The project is composed of an algorithm that generates landscapes and a Twitterbot. These images are created from a database of freely available paintings belonging to museum collections such as the MET (Metropolitan Museum of New York), the Art Institute of Chicago and the Prado Museum. From this, the bot identifies, separates and classifies the different elements that make up the landscape such as: sky, vegetation, terrain, clouds... using machine learning and computer vision algorithms, to later recompose images that it completes and reconfigures into new landscapes, combined with virtual territories modeled and programmed in GLSL and Processing to finally constitute a dataset of a neural network that generates the new landscapes. These results are oil-painted by a machine.
`

const statementFr = `Le travail de Helio Santos est développé à partir d'une approche poétique et critique de l'utilisation de l'information, des questions sociopolitiques, de l'internet et des médias audiovisuels. Il s'intéresse à l’usage de la technologie dans l'art et la vie quotidienne,  pour susciter des questions et des réflexions sur notre corps, nos connaissances et nos modes de relation avec l'environnement et les êtres vivants.

Le projet se compose d'un algorithme qui génère des paysages et d'un Twitterbot. Ces images sont créées à partir d'une base de données de peintures en libre accès appartenant à des collections de musées tels que le MET (Metropolitan Museum of New York), l’Institut d’art de Chicago et le Musée du Prado.

A partir de cela, le bot identifie, sépare et classe les différents éléments qui composent le paysage tels que : ciel, végétation, terrain, nuages... en utilisant des algorithmes de machine learning et computer vision, pour ensuite recomposer les images qu'il complète et reconfigure en nouveaux paysages, combinés à des territoires virtuels modélisés et programmés dans GLSL et Processing pour constituer finalement un dataset d'un réseau neuronal qui génère les nouveaux paysages. Ces résultats sont peints à l'huile par une machine.`

const images = [
    { name: 5, images: Array.from({length: 17}, (v, i) => `${i}`) },
    { name: 4, images: Array.from({length: 12}, (v, i) => `${i}`) },
    { name: 3, images: Array.from({length: 13}, (v, i) => `${i}`) },
    { name: 2, images: Array.from({length: 15}, (v, i) => `${i}`) },
    { name: 1, images: Array.from({length: 11}, (v, i) => `${i}`) },
]

const esTitles = {
    1: 'Paso 1 · Pinturas del Siglo XVIII y XIX',
    2: 'Paso 2 · Visión por computadora',
    3: 'Paso 3 · Reconfiguración',
    4: 'Paso 4 · GLSL',
    5: 'Paso 5 · Paisajes finales',
}

const enTitles = {
    1: 'step 1 · 18th and 19th century paintings',
    2: 'step 2 · Computer vision',
    3: 'step 3 · Reconfiguration',
    4: 'step 4 · GLSL',
    5: 'step 5 · Final landscapes',
}

const frTitles = {
    1: 'step 1 · 19th century paintings',
    2: 'step 2 · Computer vision',
    3: 'step 3 · Reconfiguration',
    4: 'step 4 · GLSL',
    5: 'step 5 · Final landscapes',
}

const [ imagesEn, imagesEs, imagesFr ] = [enTitles, esTitles, frTitles].map((title) => {
    return images.map((image) => {
        return {
            ...image,
            title: title[image.name]
        }
    })
})

module.exports.es = {
    images: imagesEs,
    expoDescription: statementEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    images: imagesEn,
    expoDescription: statementEn,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    images: imagesFr,
    expoDescription: statementFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
