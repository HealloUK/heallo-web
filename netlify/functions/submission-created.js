module.exports.handler = async function(event, context) {
  const data = JSON.parse(event.body)
  console.log(data)
  return {
    // return null to show no errors
    statusCode: 200, // http status code
    body: JSON.stringify({
      msg: "Mail sent"
    })
  }
}

