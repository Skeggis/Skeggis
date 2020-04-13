
const SKEGG_MACHO_EMAIL=process.env.SKEGG_MACHO_EMAIL
const SKEGG_NOT_SO_MACHO_EMAIL=process.env.SKEGG_NOT_SO_MACHO_EMAIL
const SKEGGIS_EMAIL = process.env.SKEGGIS_EMAIL

const nodemailer = require('nodemailer');
const config = {
  mailserver: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.SECURE_MAILING === 'true'?true:false,
    auth: {
      user: process.env.SKEGGIS_MAIL_USER,
      pass: process.env.SKEGGIS_MAIL_PASS
    }
  },

};

var maillist = [
    SKEGG_MACHO_EMAIL,
    SKEGG_NOT_SO_MACHO_EMAIL,
    SKEGGIS_EMAIL,
  ];

async function notifyUs({name, email, subject}){
    // create a nodemailer transporter using smtp
  console.log('about to send mail')
  let transporter = nodemailer.createTransport(config.mailserver);

  const mail = {
    from: process.env.SKEGGIS_EMAIL,
    to: maillist,
    cc:maillist,
    subject: 'Ný fyrirspurn, get on it SKEGGI!',
    text: `Nafn: ${name}, email: ${email}, Subject: ${subject}`,
  }

  // send mail using transporter
    let info = await transporter.sendMail(mail);

    console.log(`Preview: ${nodemailer.getTestMessageUrl(info)}`);
}

module.exports = {notifyUs}

