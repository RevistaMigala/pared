const allowedLangs = [
    'es',
    'en',
    'fr'
]

module.exports = (req, res, next) => {
    if (!req.query.lang || !allowedLangs.includes(req.query.lang)) {
        req.query.lang = 'es'
    }
    next()
}
