const basicAuth = require('express-basic-auth')

class Auth {
    constructor () {
        this.user = process.env.LOGIN_USER
        this.password = process.env.LOGIN_PASSWORD
        this.users = {}
        this.users[this.user] = this.password
        this.config = {
            users: this.users,
            challenge: true,
        }
    }

    authorizer () {
        return basicAuth(this.config)
    }
}


module.exports = new Auth()
