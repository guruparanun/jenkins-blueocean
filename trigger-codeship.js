var request = require("request");

var options = { method: 'POST',
  url: 'https://codeship.com/api/v1/builds/%7Bbuild_uuid%7D/restart.json',
  qs: { api_key: 'f96d8b70d4d60134676432d42ea42724' },
  body: '{}' };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
