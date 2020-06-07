const fs = require('fs')
const sgMail = require('@sendgrid/mail')

const sendgridApiKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridApiKey)

const submitTemplate = fs.readFileSync('./src/emails/templates/submit.txt')
    .toString('utf-8')

const sendSubmitEmail = (submit) => {
    sgMail.send({
        to: process.env.TO_EMAIL,
        cc: process.env.CC_EMAIL,
        from: process.env.EMAIL_SENDER,
        subject: 'Nueva solicitud en Pared - ' + submit.project_name,
        text: `${submitTemplate} \n ${'=^._.^= '.repeat(3)}`
            .replace('$artist_name', submit.artist_name)
            .replace('$project_name', submit.project_name)
            .replace('$project_description', submit.project_description)
            .replace('$artist_age', submit.artist_age)
            .replace('$artist_city', submit.artist_city)
            .replace('$contact_email', submit.contact_email)
            .replace('$images_folder_url', submit.images_folder_url)
    })
}

module.exports = { sendSubmitEmail }
