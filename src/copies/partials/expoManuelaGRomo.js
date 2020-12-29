const fs = require('fs')

const statementEs = `I
Pocos meses después de que iniciara la pandemia, decidí retomar virtualmente las clases que con anterioridad daba personalmente.  Después de la adrenalina inicial de adaptar mi método de enseñanza a los espacios/espejos virtuales y de aprender a negociar con la intransigente monofocalidad de la cámara, comencé a notar cambios en mi forma de sentir los espacios.

La reunión había terminado, la cámara y el micrófono de mi computadora estaban apagados, pero seguía sintiendo que alguien escuchaba mis pasos y observaba mis movimientos... Procuraba ignorar esta sensación y continuaba con mi día, hasta que la sensación se iba, pero era cuestión de tiempo para que volviese a sentir esa presencia extraña en mi taller, en mi casa...

II
El confinamiento me obligó a mirar hacia adentro: mirarme para vigilar mi salud, mirar el refri (pues salir a comer dejó de ser una opción) y estar pendiente de que no se vacíe, mirar los cajones, los libreros, mirar mi casa. Poco a poco ese mirar hacia adentro se volcó no sólo en mí misma, sino en lxs otrxs. La desaceleración del cotidiano me permitió escribir a amigxs, familia, estrechar lazos que ya existían y generar nuevos.

Poco a poco las videollamadas se volvieron la mejor opción para platicar, juntas de trabajo, visitas de estudio, charlas, fiestas...  Acompañando la imagen de mis seres queridos, encontré también sus espacios, sus contextos.

III
Un amigo decidió defender a Narciso un día, dijo que era injusto que se le tachase de vanidoso, pues lo que le encantaba a Narciso no era el hecho de ver solo su imagen, sino de ver su imagen en un contexto, como un marco o un espejo. La pantalla se convirtió entonces en ese marco/espejo, en esa ventana/puerta, en esa forma de mirar hacia dentro y hacia fuera... Quizá esa presencia que siento es yo misma, reflejada en un contexto... De pronto todos nos volvimos Narcisos.

IV
Una de las teorías que más me gusta sobre la pintura de las cavernas es la que sostiene su función ritual, la danza eterna de los caballos, osos y demás animales que tanto nos maravillan; funcionaban como un talismán mágico, dotando a las comunidades humanas del poder de cazar. El pintar/dibujar o en otras palabras el enunciar aquello que les era ajeno y peligroso, les permitía asirlo, humanizarlo y controlarlo para sobrevivir.

V
Llego temprano a la "reunión", enciendo la cámara (en la virtualidad, la puntualidad toma un cariz enrarecido e incómodo) veo mi imagen, el cabello, los ojos, el espacio, mi espacio. Al mirarlo a través de la pantalla toma un carácter ajeno, esos objetos a los que estoy tan acostumbrada toman un protagonismo extraño, me levanto y los acomodo, los guardo, los escondo... De pronto mi casa empieza a ser menos como la Habitación propia de Woolf y se transforma en la Casa tomada de Cortázar. Enunciarla es resistir, es mirarla de nuevo y volverla propia.
`

const statementEn = `I
A few months after the pandemic began, I decided to virtually resume the classes I had previously taught personally.  After the initial adrenaline rush of adapting my teaching method to the virtual spaces/mirrors and learning to negotiate with the uncompromising mono-focus of the camera, I started noticing changes in my way of feeling the spaces. The meeting was over, the camera and microphone of my computer turned off, but I still felt that someone was listening to my steps and watching my movements… I tried to ignore this feeling and continued with my day, until the feeling was gone, but it was only a matter of time before I felt that strange presence again in my workshop, in my house...

II
The confinement forced me to look inwards: to look at myself to keep an eye on my health, to look at the fridge (because going out to eat was no longer an option) and to make sure it doesn't get empty, to look at the drawers, the bookcases, to look at my house. Little by little, that look inwards turned not only on myself, but also on others. The deceleration in my daily life allowed me to write to friends and family, to strengthen the bonds that already existed and to create new ones.  Little by little, video calls became the best option to talk, work meetings, study visits, talks, parties...  Accompanying the image of my loved ones, I also found their spaces, their contexts.

III
A friend decided to defend Narcissus one day, he said that it was unfair to label him as vain, because what Narcissus loved was not just seeing his image, but seeing his image in a context, like a frame or a mirror.
The screen then became that frame/mirror, that window/door, that way of looking in and out… Maybe that presence I feel is myself, reflected in a context... Suddenly we all became Narcissus.

IV
One of the theories I like most about cave painting is the one that supports its ritual function, the eternal dance of horses, bears and other animals that amaze us so much; they functioned as a magic talisman, endowing human communities the power to hunt. Painting/drawing, or in other words speaking about what was foreign and dangerous to them, allowed them to grasp it, humanise it and control it to survive.

V
I arrive at the "meeting" early , I turn on the camera (in virtual, punctuality takes on a rarefied and uncomfortable aspect) I see my image, my hair, my eyes, the space, my space. When I look at it through the screen it takes on a foreign character, those objects that I am so used to take on a strange prominence, I get up and put them away, I put them away, I hide them... Suddenly my house begins to be less like A room of one's own by Woolf and becomes the House taken over by Cortázar. To say it is to resist, it is to look at it again and make it your own.
`

const statementFr = `I
Quelques mois après le déclenchement de la pandémie, j'ai décidé de reprendre virtuellement les cours que j'avais précédemment donnés personnellement. Après la montée d'adrénaline initiale due à l'adaptation de ma méthode d'enseignement aux espaces/miroirs virtuels et à l'apprentissage de la négociation avec le monofocus intransigeant de la caméra, j'ai commencé à remarquer des changements dans ma perception des espaces.

La réunion était terminée, la caméra et le micro de mon ordinateur étaient éteints, mais j'avais toujours l'impression que quelqu'un écoutait mes pas et surveillait mes mouvements…  J'essayais d’ignorer cette sensation et je continuais ma journée, jusqu’à ce que la sensation s’en aille, mais ce n’était qu’une question de temps avant que je ne ressente à nouveau cette présence étrange dans mon atelier, chez moi…

II
Le confinement m'a obligé à regarder vers l'intérieur: me regarder pour surveiller ma santé, regarder le frigo (donc sortir manger n’était plus une option) et veiller à ce qu’il ne se vide pas, regarder les tiroirs, les étagères, regarder ma maison. Peu à peu, ce regard s’est tourné non seulement vers moi-même, mais vers les autres.  Le ralentissement du quotidien m’a permis d’écrire à des amis, à ma famille, de renforcer les liens qui existaient déjà et d’en créer de nouveaux. Petit à petit, les appels vidéo devinrent la meilleure option pour parler, réunions de travail, visites d’étude, causeries, fêtes... En accompagnant l’image de mes proches, j’ai trouvé aussi leurs espaces, leurs contextes.

III
Un ami a décidé de défendre Narcisse un jour, en disant qu'il était injuste de le qualifier de vaniteux, car ce que Narcisse aimait, ce n'était pas seulement de voir son image, mais de voir son image dans un contexte, comme un cadre ou un miroir. L'écran est alors devenu ce cadre/miroir, cette fenêtre/porte, cette façon de regarder à l'intérieur et à l'extérieur… Peut-être que cette présence que je ressens est moi-même reflétée dans un contexte... Tout d’un coup, nous sommes tous devenus des Narcisses.

IV
Une des théories que j'aime le plus dans la peinture rupestre est qu'elle soutient sa fonction rituelle, la danse éternelle des chevaux, des ours et d'autres animaux qui nous étonnent tant; ils fonctionnent comme un talisman magique, donnant aux communautés humaines le pouvoir de chasser. La peinture/dessin, ou en d'autres termes, énoncer ce qui leur était étranger et dangereux, leur permettait de le saisir, de l'humaniser et de le contrôler pour survivre.

V
J'arrive tôt à la "réunion", j'allume la caméra (dans le virtuel la ponctualité prend une tournure raréfiée et inconfortable), je vois mon image, mes cheveux, mes yeux, l'espace, mon espace. Quand je le regarde à travers l'écran, il prend un caractère extraterrestre, ces objets dont j'ai tant l'habitude de prendre une étrange importance, je me lève et je les range, je les range, je les cache... Soudain, ma maison commence à ressembler moins à Une chambre à soi de Woolf et se transforme en la Maison occupée de Cortázar. Dire c'est résister, regarder à nouveau et se l'approprier.
`

const submitEs = `Proyecto Casa propia propone reflexionar sobre la posibilidad ritual de la enunciación/representación como una manera de asir y recuperar los espacios que habitamos. Consta de dos momentos: en su inicio busca generar un archivo de descripciones afectivas de los espacios que habitamos; posteriormente, los textos serán interpretados/intervenidos/retomados a través de distintas salidas plásticas y visuales por Manuela G. Romo.
Las imágenes resultantes y los textos (o fragmentos) serán mostradas en el espacio virtual de PARED durante el mes de enero del 2021. Los fragmentos de los textos publicados en la exposición pueden ser anónimos a elección de sus creadorxs.

Si te interesa participar en Proyecto Casa propia, envía una breve descripción afectiva (máximo 800 caracteres con espacios) del espacio donde habitas a p.casa.propia@gmail.com a partir del 15 de diciembre y en el transcurso del mes de enero. La idea del proyecto es retomar tantas descripciones afectivas como sea posible; sin embargo, por cuestiones de tiempo, no podemos comprometernos a trabajar con todas.
`

const submitFr = `Le projet Propre maison propose de réfléchir sur la possibilité rituelle d'énonciation/représentation comme moyen de saisir et de récupérer les espaces que nous habitons. Le projet se compose de deux moments: au début, il cherche à générer des archives de descriptions affectives des espaces que nous habitons; plus tard, les textes seront  interprétés/intervenus/repris à travers différentes productions plastiques et visuelles de Manuela G. Romo. Les images et les textes (ou fragments) résultantes seront présentés dans l'espace virtuel du PARED au cours du mois de janvier 2021. Les fragments des textes publiés dans l'exposition peuvent être anonymes au choix de leurs créateurs.

Si vous êtes intéressé à participer au projet Propre maison, envoyez une brève description affective (maximum 800 caractères avec espaces) de l'espace où vous vivez à p.casa.propia@gmail.com à partir du 15 décembre et pendant le mois de janvier. L'idée du projet est de reprendre autant de descriptions affectives que possible; cependant, pour des questions du temps, nous ne pouvons pas nous engager à travailler avec toutes.
`

const submitEn = `The Own House Project proposes to reflect on the ritual possibility of enunciation/representation as a way of grabbing and recovering the spaces we inhabit. The project consists of two moments: at the beginning it seeks to generate an archive of affective descriptions of the spaces we inhabit; later, the texts will be interpreted/intervened/taken up through different plastic and visual outputs by Manuela G. Romo.
The resulting images and texts (or fragments) will be shown in the virtual space of PARED during the month of January 2021. The fragments of the texts published in the exhibition can be anonymous at the choice of their creators.

If you are interested in participating in the Own House Project, send a brief emotional description (maximum 800 characters with spaces) of the space where you live to p.casa.propia@gmail.com from December 15th and during the month of January. The idea of the project is to take up as many affective descriptions as possible; however, due to time constraints, we cannot commit to working with all of them.
`

module.exports.es = {
    expoDescription: statementEs,
    expoSubmit: submitEs,
    username: 'Nombre de usuario',
    message: 'Mensaje',
    startMessage: 'Bienvenido al chat. Mientras dure la transmisión en vivo, puedes preguntar o comentar lo que desees al artista o a los curadores.',
}

module.exports.en = {
    expoDescription: statementEn,
    expoSubmit: submitEn,
    username: 'User name',
    message: 'Message',
    startMessage: 'Welcome to the chat. Meanwhile the transmission is online you can make any questions or comments to artist or curators.',
}

module.exports.fr = {
    expoDescription: statementFr,
    expoSubmit: submitFr,
    username: 'Nom',
    message: 'Message',
    startMessage: 'Bienvenue sur le chat. Pendant la diffusion en direct, vous pouvez demander ou commenter tout ce que vous voulez à l\'artiste ou aux membres du Pared.',
}
