const formData = require('form-data');
const Mailgun = require('mailgun.js');

const sendThankYouEmail = async ({ email }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');
    console.log(email)
    
    const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;
    
    const mailgun = new Mailgun(formData);
    const client = mailgun.client({username: 'api', key: apiKey});

    const messageData = {
      from: 'Customer Service <thanks@heallo.co.uk>',
      to: email,
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!'
    };

    client.messages.create(domain, messageData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });


  });
};


module.exports.handler = async function(event, context) {

  try {
	  const data = JSON.parse(event.body)
    
    await sendThankYouEmail(data.payload);

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

