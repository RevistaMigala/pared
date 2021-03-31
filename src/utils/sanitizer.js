const sanitizeMessageText = (message) => {
    return message .replace(/</g, '&lt;')
            .replace(/>/g, '&gt')
            .replace(/script/g, 'escript')
            .replace(/\//g, '|')
}

const sanitizeMessage = ({ username, message, expo }) => {
    const validExpos = [
        'LinaVelasquez',
        'SergioSuarez',
        'AliciaAyanegui',
        'AlejandraAguilar',
        'CirceIrasema',
        'ManuelaGRomo',
        'HelioSantos',
        'GabrielCarrillo',
        'JavierFuentes'
    ]
    if (!validExpos.includes(expo)) {
        console.log('Expo not valid', expo)
        return
    }
    return {
        username: sanitizeMessageText(username),
        message: sanitizeMessageText(message),
        expo,
    }
}

const sanitizeWebSafe = (text) => {
    return text
        .toLowerCase()
        .replace(/[\+\s?]/g, '')
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u')
        .replace(/Á/g, 'A')
        .replace(/É/g, 'E')
        .replace(/Í/g, 'I')
        .replace(/Ó/g, 'O')
        .replace(/Ú/g, 'U')
        .replace(/ñ/g, 'n')
        .replace(/Ñ/g, 'N')

}

module.exports = {
    sanitizeMessage,
    sanitizeWebSafe,
    sanitizeMessageText,
}
