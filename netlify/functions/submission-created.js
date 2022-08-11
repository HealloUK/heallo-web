const formData = require('form-data');
const Mailgun = require('mailgun.js');
const Airtable = require('airtable');

const sendThankYouEmail = async ({ email, name }) => {
  return new Promise((resolve, reject) => {
    console.log('Sending the email');

    const { MG_API_KEY: apiKey, MG_DOMAIN: domain } = process.env;

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: apiKey });
    const firstName = name.substr(0, name.indexOf(" "))

    const messageData = {
      from: 'Customer Service <welcome@heallo.co.uk>',
      to: email,
      subject: `Hey ${firstName}, We will reach you soon`,
      template: 'welcome',
      't:variables': JSON.stringify({ // be sure to stringify your payload
        firstName,
      })
    };

    client.messages.create(domain, messageData)
      .then((res) => {
        console.log(res);
        resolve();
      })
      .catch((err) => {
        console.error(err);
        reject();
      });


  });
};


const saveUser = async ({ email, name, phone }) => {
  return new Promise((resolve, reject) => {
    console.log('Saving user datas on airtable');

    const { AT_API_KEY: apiKey, AT_BASE, AT_TABLE } = process.env;

    Airtable.configure({
      endpointUrl: 'https://api.airtable.com',
      apiKey
    });

    const base = Airtable.base(AT_BASE_1);


    base('Applicants').create([
      {
        "fields": {
          "Name": name,
          "Stage": "Interviewing",
          "Applying for": [
            "recQ0VZ3ACX24CfN0"
          ],
          "Email address": email,
          "Phone": phone,
        }
      },
    ], function (err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
      resolve();
    });



  });
};


module.exports.handler = async function (event, context) {

  try {
    const data = JSON.parse(event.body)

    await sendThankYouEmail(data.payload);
    await saveUser(data.payload);

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

