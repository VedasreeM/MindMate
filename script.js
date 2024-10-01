// Get references to the DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to handle sending messages
function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Display user message
        displayMessage("You: " + message);
        userInput.value = ""; // Clear input field
        
        // Simulate a response from the chatbot
        setTimeout(() => {
            const botResponse = getBotResponse(message);
            displayMessage("MindMate: " + botResponse);
        }, 1000); // Simulate a 1-second delay for response
    }
}

// Function to display messages in the chat box
function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to generate bot responses (updated example)
function getBotResponse(userMessage) {
    // Convert the message to lowercase for easier comparison
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Simple responses based on user input
    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
        return "Hi there! How can I help you today?";
    } else if (lowerCaseMessage.includes("how are you")) {
        return "I'm just a program, but I'm here to help you!";
    } else {
        return "I'm not sure how to respond to that. Can you please elaborate?";
    }
}

// Event listener for send button
sendBtn.addEventListener("click", sendMessage);

// Event listener for 'Enter' key
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
