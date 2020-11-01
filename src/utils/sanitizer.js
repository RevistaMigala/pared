module.exports.sanitizeMessage = ({ username, message, expo }) => {
    const validExpos = [
        'LinaVelasquez',
        'SergioSuarez',
        'AliciaAyanegui',
        'AlejandraAguilar'
    ]
    if (!validExpos.includes(expo)) {
        return
    }
    return {
        username: username.replace('<', '&lt;').replace('>', '&gt').replace('script', 'escript').replace('/', '|'),
        message: message.replace('<', '&lt;').replace('>', '&gt').replace('script', 'escript').replace('/', '|'),
        expo,
    }
}
