// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const userMessage = userInput.value;

    if (userMessage.trim() === "") return;

    // Display user message
    displayMessage(userMessage, "user");

    // Clear input field
    userInput.value = "";

    // Get bot response
    const botResponse = getBotResponse(userMessage);
    displayMessage(botResponse, "bot");
}

// Function to display messages in the chat box
function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
}

// Simple rule-based responses
function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Define responses
    if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
        return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes("how are you")) {
        return "I'm here to help! How are you feeling today?";
    } else if (lowerCaseMessage.includes("help")) {
        return "Sure! I'm here for you. Please tell me what's on your mind.";
    } else if (lowerCaseMessage.includes("sad") || lowerCaseMessage.includes("depressed")) {
        return "I'm sorry to hear that. It's okay to feel this way. Let's talk about it.";
    } else if (lowerCaseMessage.includes("happy")) {
        return "That's great to hear! What made you feel happy today?";
    }
    else if (lowerCaseMessage.includes("moodoff||not ok")){
        return "what happend buddy? I am here for you to talk...";
    }
    else if (lowerCaseMessage.includes("lonely")){
        return "I'm really sorry to hear that you're alone. It's important to talk about it. I'm here to listen if you want to share more.";
    }
    
    
     else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Take care, and remember I'm here whenever you need to talk.";
    } else {
        return "I'm not sure how to respond to that. Can you please elaborate?";
    }
}

// Add event listener to the send button
document.getElementById("send-btn").addEventListener("click", sendMessage);

// Optional: Allow sending messages with the Enter key
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
