const ftp = require('basic-ftp')

class FtpClient {
    constructor () {
        this.baseUrl = process.env.CASAPROPIA_FTP_URL
        this.client = new ftp.Client()
        this.access = this.client.access({
            host: process.env.CASAPROPIA_FTP_HOST,
            user: process.env.CASAPROPIA_FTP_USER,
            password: process.env.CASAPROPIA_FTP_PASSWORD,
            secure: true,
            secureOptions: {
                rejectUnauthorized: false,
            },
        })
    }

    async uploadFile (fileBuffer, fileName) {
        try {
            const destination = `${this.baseUrl}/${fileName}`
            await this.access
            await this.client.uploadFrom(fileBuffer, destination)
        } catch (error) {
            console.log(error)
        } finally {
            this.client.close()
        }
    }
}

module.exports = FtpClient
