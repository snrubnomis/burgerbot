var burgerbot = (function() {
  // Public methods
  return {
    initialize : initialize,
    keyPressed : keyPressed
  };

  // Conversation context
  var context;

  // Sends initial message to start conversation
  function initialize () {
    sendMessage('');
  }

  // Display a user or Watson message
  function displayMessage(who, response) {
    var conversationElement = document.getElementById('conversation');

    // Create new message DOM element
    var messageElement = document.createElement('li');
    messageElement.className = who;
    messageElement.appendChild(document.createTextNode(response.output.text));
    conversationElement.append(messageElement);

    // Scroll to bottom of conversation
    conversationElement.scrollTop = conversationElement.scrollHeight;
  }

  // Send message
  function sendMessage (text) {
    // Setup HTTP request
    var http = new XMLHttpRequest();
    http.open('POST', '/message', true);
    http.setRequestHeader('Content-type', 'application/json');
    http.onreadystatechange = function() {
      if (http.readyState === 4 && http.status === 200 && http.responseText) {
        var responseObject = JSON.parse(http.responseText);
        context = responseObject.context;
        displayMessage('watson', responseObject);
      }
    };

    // Construct request payload
    var payload = {
      input : {
        text : text
      },
      context : context
    };

    // Send request
    http.send(JSON.stringify(payload));
  }

  // Handles the submission of input
  function keyPressed (event, inputField) {
    // Submit on enter key, dis-allowing blank messages
    if (event.keyCode === 13 && inputField.value) {
      displayMessage('user', {output: {text: inputField.value}});
      sendMessage(inputField.value);
      // Clear input for further messages
      inputField.value = '';
    }
  }
}());
