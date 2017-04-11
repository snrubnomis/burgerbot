// Configure dotenv to get environment variables
require('dotenv').config();

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var bodyParser = require('body-parser');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// Watson Conversation
var ConversationV1 = require('watson-developer-cloud/conversation/v1');
var conversation = new ConversationV1({
  username: process.env.username,
  password: process.env.password,
  version_date: '2017-02-03'
});

// Create a new express server
var app = express();

// Enable body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// Get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// Create POST /message API to receive messages from front-end
app.post('/message', function(request, response) {
  // Setup payload
  var payload = {
    workspace_id: process.env.WORKSPACE_ID,
    context: request.body.context,
    input: request.body.input
  }

  // Send message to Conversation service
  conversation.message(payload,
    function(err, data) {
      if (err) {
        return response.status(err.code || 500).json(err);
      }
      return response.json(data);
    }
  );
});

// Start server
app.listen(appEnv.port, '0.0.0.0', function() {
  console.log("server starting on " + appEnv.url);
});
