//get email API credentials
require('dotenv').config("./.env");
const sgMail = require('@sendgrid/mail')

//set up email transport
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
//smtp credentials
const fromEmail = process.env.FROMEMAIL



exports.sendVoucherMessage = function (first, last, email, voucherCode) {
    //generate message object
    console.log("Sending voucher email...")
    console.log("sendgridAPI: ". process.env.SENDGRID_API_KEY)
    console.log("sendgridAPI: ". process.env.fromEmail)

    var message = {
        from: fromEmail,
        to: `${first} ${last} <${email}>`,
        subject: 'Thank you for volunteering',
        text: 'Bridger Voucher Code',
        html: `
            <h2>Thank you ${first},</h2>
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

    return message;
}

exports.sendConfirmationEmail = function (first, last, email, eventName, date) {
    var message = {
        from: fromEmail,
        to: `${first} ${last} <${email}>`,
        subject: 'Volunteer Registration Confirmation',
        text: 'Registration Confirmation',
        html: `
            <h2>Thank you ${first},</h2>
            <h3> Your free ski pass voucher will be emailed at the end of the day.</h3>
            <p> Event Name: ${eventName}</p>
            <p> Event Date: ${date}</p>`
    }
    sgMail
        .send(message)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })

    return message;
}

