module.exports.sanitizeMessage = ({ username, message, expo }) => {
    const validExpos = [
        'LinaVelasquez',
        'SergioSuarez',
        'AliciaAyanegui',
        'AlejandraAguilar',
        'CirceIrasema'
    ]
    if (!validExpos.includes(expo)) {
        console.log('Expo not valid', expo)
        return
    }
    return {
        username: username.replace('<', '&lt;').replace('>', '&gt').replace('script', 'escript').replace('/', '|'),
        message: message.replace('<', '&lt;').replace('>', '&gt').replace('script', 'escript').replace('/', '|'),
        expo,
    }
}
