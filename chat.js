function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const imageFrame = document.getElementById("imageFrame");

    // Hide the image frame after the first query
    if (imageFrame && !imageFrame.classList.contains("hidden")) {
        imageFrame.classList.add("hidden");
    }

    if (userInput.value.trim() !== "") {
        // Display the user's message (right side)
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = userInput.value;
        chatbox.appendChild(userMessage);

        // Auto-scroll to the bottom
        chatbox.scrollTop = chatbox.scrollHeight;

        // Simulate bot response (left side)
        setTimeout(() => {
            // Create a container for the bot message and image
            const botMessageContainer = document.createElement("div");
            botMessageContainer.className = "message bot-container";

            // Create the bot logo (image)
            const botLogo = document.createElement("img");
            botLogo.className = "bot-logo";
            botLogo.src = "chat.jpeg"; // Replace with your logo path

            // Create the bot's message
            const botMessage = document.createElement("div");
            botMessage.className = "message-text";
            botMessage.textContent = `Here's some information about: ${userInput.value}`;

            // Append the logo and message to the container
            botMessageContainer.appendChild(botLogo);
            botMessageContainer.appendChild(botMessage);

            chatbox.appendChild(botMessageContainer);

            // Auto-scroll to the bottom
            chatbox.scrollTop = chatbox.scrollHeight;
        }, 500);

        // Clear the input field
        userInput.value = "";
    }
}
