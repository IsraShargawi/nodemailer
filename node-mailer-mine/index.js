"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "israshargawi@gmail.com",
      pass: "gmr100100"
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: "israshargawi@gmail.com", // sender address
    to:
      "israshargawi@gmail.com, ah.samba12@gmail.com, fadoalqasem@gmail.com,hanem.shaaban96@gmail.com,alsmani3344@gmail.com", // list of receivers
    subject: "Hello freinds", // Subject line
    text: "it is just try hhhhhhhh" // plain text body
    //html: "<b>Hello world?</b>" // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
