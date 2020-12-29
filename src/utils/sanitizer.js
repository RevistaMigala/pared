module.exports.sanitizeMessage = ({ username, message, expo }) => {
    const validExpos = [
        'LinaVelasquez',
        'SergioSuarez',
        'AliciaAyanegui',
        'AlejandraAguilar',
        'CirceIrasema',
        'ManuelaGRomo'
    ]
    if (!validExpos.includes(expo)) {
        console.log('Expo not valid', expo)
        return
    }
    return {
        username: username
            .replace('<', '&lt;')
            .replace('>', '&gt')
            .replace('script', 'escript')
            .replace('/', '|'),
        message: message
            .replace('<', '&lt;')
            .replace('>', '&gt')
            .replace('script', 'escript')
            .replace('/', '|'),
        expo,
    }
}

module.exports.sanitizeWebSafe = (text) => {
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
