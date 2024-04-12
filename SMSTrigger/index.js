const twilio = require("twilio");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const number = req.query.number || (req.body && req.body.number);
  const message = req.query.message || (req.body && req.body.message);
  
  if (number && message) {
    const accountSid = process.env["TWILIO_ACCOUNT_SID"];
    const authToken = process.env["TWILIO_AUTH_TOKEN"];
    const client = new twilio(accountSid, authToken);
    client.messages
      .create({
        body: message,
        from: process.env["TWILIO_PHONE_NUMBER"],
        to: number,
      })
      .then((message) => console.log(message.sid));
      
      context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Message sent"
    };
  } else {
    context.res = {
        status: 400,
        body: "Please pass a number and message on the query string or in the request body"
    };
  }
};
