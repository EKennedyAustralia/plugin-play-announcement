function sendResponse(data) {
  const response = new Twilio.Response();
  response.appendHeader("Access-Control-Allow-Origin", "*");
  response.appendHeader("Access-Control-Allow-Methods", "POST,OPTIONS,GET,PUT");
  response.appendHeader("Content-Type", "application/json");
  response.setBody(data);
  return response;
}

exports.handler = function(context, event, callback) {
    const accountSid = context.ACCOUNT_SID;
    const authToken = context.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    const conference = event.Sid;
///replace URL with URL to your TWML BIN
    client.conferences(conference)
        .update({announceUrl: 'https://handler.twilio.com/twiml/EH478d88b6dfa9aab8b6c145d2d1c8bfbc'})
        .then(conference => callback(null, sendResponse({friendlyname: conference.firendlyname})));
};