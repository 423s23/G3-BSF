const dotenv = require('dotenv');
dotenv.config()

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fromEmail = "bsf@buffington.dev"



exports.sendVoucherMessage = function (name, email, voucherCode) {
    //generate message object
    var message = {
        to: email,
        from: fromEmail,
        subject: 'Thank you for volunteering',
        text: 'Bridger Voucher Code',
        html: `
            <h2>Thank you ${name},</h2>
            <p>Your voucher code is <b>${voucherCode}.</b></p>
            <img alt="BSF logo" width="100px" src="https://uploads-ssl.webflow.com/57b4d56c1f986d4879b0574d/581d0395c6f121fb068e4d22_BSFlogo.jpg">`
    }
    sgMail
        .send(message)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

exports.sendConfirmationEmail = function (first, last, email) {
    var message = {
        from: fromEmail,
        to: `${first} ${last} <${email}>`,
        subject: 'Volunteer Registration Confirmation',
        text: 'Registration Confirmation',
        html: `
            <h2>Hi ${first} ${last},</h2>
            <h4>Thank you for volunteering with <a href="https://www.bridgerskifoundation.org/">BSF</a></h4>
            <p> Your free ski pass voucher will be emailed at the end of the day.</p>`
    }

    sgMail
        .send(message)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}  



