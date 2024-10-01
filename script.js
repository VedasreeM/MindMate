// Get references to the DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Function to handle sending messages
async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        displayMessage("You: " + message);
        userInput.value = ""; // Clear input field
        
        // Get response from Gemini API
        const botResponse = await getGeminiResponse(message);
        displayMessage("MindMate: " + botResponse);
        
        // Optionally, check in on user mood after certain messages
        if (message.toLowerCase().includes("how am i") || message.toLowerCase().includes("feel")) {
            displayMessage("MindMate: How are you feeling today? Feel free to share!");
        }
    }
}

// Function to display messages in the chat box
function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to get response from Gemini API
async function getGeminiResponse(userMessage) {
    const apiUrl = 'YOUR_GEMINI_API_ENDPOINT'; // Replace with your actual endpoint
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ message: userMessage })
    });

    if (response.ok) {
        const data = await response.json();
        return data.response; // Adjust based on actual response structure
    } else {
        return "I'm having trouble connecting to my support system right now.";
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

// Function to periodically check in on the user
setInterval(() => {
    displayMessage("MindMate: Just checking in! How are you feeling right now?");
}, 60000 * 10); // Check in every 10 minutes
