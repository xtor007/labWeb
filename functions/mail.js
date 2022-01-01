const nodeMailer = require('nodemailer')

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
      user: 'a.khramchenko.ip01@gmail.com',
      pass: 't2o7l0x5'
  }
})

const mailer = message => {
  transporter.sendMail(message, (err,info) => {
    if (err) return console.log(err)
    //console.log(info)
  })
}

module.exports = mailer
