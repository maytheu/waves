const mailer = require("nodemailer");
require("dotenv").config();
const { welcome } = require("./welcome_template");
const { purchase } = require("./purchase_template");
const { resetPass } = require("./reset_template");

const getEmailData = (to, name, token, template, actionData) => {
  let data = null;

  switch (template) {
    case "welcome":
      data = {
        from: "Waves <maytheuhaydey@gmail.com>",
        to,
        subject: `Welcome to waves ${name}`,
        html: welcome()
      };
      break;
    case "purchase":
      data = {
        from: "Waves <maytheuhaydey@gmail.com>",
        to,
        subject: `Thanks for shopping with us ${name}`,
        html: purchase(actionData)
      };
      break;
      case 'reset_password':
      data = {
        from: "Waves <maytheuhaydey@gmail.com>",
        to,
        subject: `${name}, reset your password`,
        html: resetPass(actionData)
      };
      break;
    default:
      data;
  }
  return data;
};

const sendEmail = (to, name, token, type, actionData = null) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "maytheuhaydey@gmail.com",
      pass: process.env.EMAIL_PASS
    }
  });

  const mail = getEmailData(to, name, token, type, actionData);

  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
