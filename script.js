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
    } else if (lowerCaseMessage.includes("moodoff") || lowerCaseMessage.includes("not ok")) {
        return "What happened, buddy? I am here for you to talk...";
    } else if (lowerCaseMessage.includes("lonely")) {
        return "I'm really sorry to hear that you're alone. It's important to talk about it. I'm here to listen if you want to share more.";
    } else if (lowerCaseMessage.includes("avoid") || lowerCaseMessage.includes("avoiding")) {
        return "It's okay, buddy, I'm here to listen if you want to share more.";
    } else if (lowerCaseMessage.includes("my friends are not talking to me")) {
        return `It must feel really frustrating, but here’s something you can try, buddy:<br><br>
        - Reach out calmly: Choose one or two friends and talk to them privately. Let them know you’ve noticed some distance and ask if something’s going on.<br>
        - Be open but not accusatory: Use “I feel” statements, like "I feel a bit left out lately" instead of "You are ignoring me." This helps avoid defensiveness.<br>
        - Give them space: Sometimes people need a little time to process, so after you’ve spoken, allow them space to respond at their own pace.<br>
        - Focus on yourself: Engage in activities that make you feel happy and fulfilled. It can boost your mood and confidence while you wait for things to resolve.`;
    } else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
        return "Come whenever you need me, buddy. Thank you!";
    } else if (lowerCaseMessage.includes("bye")) {
        return "Goodbye! Take care, and remember I'm here whenever you need to talk.";
    } else {
        return "I'm not sure how to respond to that. Can you please elaborate?";
    }
}
