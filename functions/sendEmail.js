require("dotenv").config();
const sgMail = require("@sendgrid/mail");

exports.handler = async function (event, _context, callback) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  try {
    const bodyContent = JSON.parse(event.body);
    const { name, email, message } = bodyContent;

    // Check that we have all the right
    // parts of the message
    if (!name || !email || !message) {
      callback(null, { statusCode: 400, body: "Missing params" });
      return;
    }

    // Compose the message
    const composedMessage = {
      to: process.env.REPLY_TO,
      from: `noreply@glvn.co`,
      subject: `sunnygolovine.com - New Message from ${name}[${email}]`,
      text: `
        Someone sent you a message from sunnygolovine.com

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    const resp = await sgMail.send(composedMessage);
    // Check that the message was sucessfully send to sendgrid
    if (resp.length === 0 || resp[0].statusCode !== 202) {
      callback(null, {
        statusCode: 400,
        body: "Error! Sending Message",
      });
      return;
    }

    callback(/** error */ null, { statusCode: 200, body: "Success!" });
    return;
  } catch {
    callback(null, { statusCode: 400, body: "Error!" });
    return;
  }
};
