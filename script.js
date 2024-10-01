// Get references to HTML elements
const userInputField = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

// Gemini API configuration
const apiKey = 'YOUR_API_KEY';
const apiEndpoint = 'https://api.gemini.com/v1/chat';

// Function to send a message to the Gemini API
function sendMessage(text) {
  const requestData = {
    prompt: text,
    temperature: 0.7, // Adjust temperature as needed
  };

  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify(requestData),
  })
  .then(response => response.json())
  .then(data => {
    // Process the response from the Gemini API
    const chatbotResponse = data.response;
    displayMessage('Chatbot:', chatbotResponse);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}

// Function to display a message in the chat history
function displayMessage(sender, text) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${text}`;
  chatMessages.appendChild(messageElement);
}

// Event listener for user input
userInputField.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const userInput = userInputField.value;
    userInputField.value = ''; // Clear the input field
    sendMessage(userInput);
  }
});
