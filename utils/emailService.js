const nodemailer = require('nodemailer');
const ErrorHandler = require("../utils/ErrorHandler");
const { getResetEmailTemplate } = require('./EmailTemplate');
const { getNewEmailTemplate } = require('./emailnewtemplate');

const Emailservice = (async (email, res, next) => {
    console.log("email==============", email);

    // let fromEmail = req.body.fromEmail;
    // let toEmail = req.body.toEmail;
    // let message = req.body.message;
    // let subject = req.body.subject;
  const Message = getResetEmailTemplate("vijay","https://www.google.com/maps/@13.0429193,77.6459276,13z")
  const message = getNewEmailTemplate()
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:"vijays04042000@gmail.com",
        pass: "vxfydxeslonjjkaz",
      },
    });
  
    var mailOptions = {
      from:"vijays04042000@gmail.com",
      to: email,
      subject: "Checking The Mail",
      html: message,
    };
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    res.status(200).send("Email Send to user succesfully");


})

module.exports = Emailservice