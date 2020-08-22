
const nodemailer = require('nodemailer')
const EMAIL = 'tuan.na.230@gmail.com'
const PASSWORD = 'anhtuanqwe'



const handlers = {
    async sendMail(data) {
        const mailTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })
        console.log('vao')
        let { to, subject, text, html } = data
        if (!to) {
            throw new Error(`Missing info 'to'!`)
        }
        if (!subject) {
            throw new Error(`Missing info 'subject'!`)
        }
        if (!text && !html) {
            throw new Error(`Missing info 'text' or 'html'!`)
        }

        await mailTransport.sendMail({
            from: EMAIL,
            to,
            subject,
            text,
            html
        }, (err, info) => {
            if (err) {
                console.error(err.message)
            } else {
                console.log({ message: 'Success!', info })
            }
        })
    }
}

module.exports = handlers