const Mailgun = require('mailgun-js');

const sendThankYouEmail = async ({ email }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');
    const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;
    const mailgun = Mailgun({
      apiKey,
      domain
    });

    const mailData = {
      from: 'Stefan Judis <no-reply@stefanjudis.com>',
      to: email,
      subject: 'Thank you for your interest',
      text: "I'll come back to you asap!"
    };

    mailgun.messages().send(mailData, err => {
      if (err) return reject(err);

      resolve();
    });
  });
};


module.exports.handler = async function(event, context) {

  try {
	  const data = JSON.parse(event.body)
    
    await sendThankYouEmail(data);

	  console.log(data)
	  return {
	    // return null to show no errors
	    statusCode: 200, // http status code
	    body: JSON.stringify({
	      msg: "Mail sent"
	    })
	  }
  } catch (e) {
    console.log(e);
    return {
      statusCode: 500,
      body: e.message
    }
  }

  

}

