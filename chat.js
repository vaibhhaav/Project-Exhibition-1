function sendMessage() {
    const userInput = document.getElementById("userInput");
    const chatbox = document.getElementById("chatbox");
    const imageFrame = document.getElementById("imageFrame");

    if (imageFrame && !imageFrame.classList.contains("hidden")) {
        imageFrame.classList.add("hidden");
    }

    if (userInput.value.trim() !== "") {
        const userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = userInput.value;
        chatbox.appendChild(userMessage);

        chatbox.scrollTop = chatbox.scrollHeight;

        setTimeout(() => {

            const botMessageContainer = document.createElement("div");
            botMessageContainer.className = "message bot-container";

            const botLogo = document.createElement("img");
            botLogo.className = "bot-logo";
            botLogo.src = "chat.jpeg";

            const botMessage = document.createElement("div");
            botMessage.className = "message-text";
            botMessage.textContent = `Here's some information about: ${userInput.value}`;

            botMessageContainer.appendChild(botLogo);
            botMessageContainer.appendChild(botMessage);

            chatbox.appendChild(botMessageContainer);

            chatbox.scrollTop = chatbox.scrollHeight;
        }, 500);
        
        userInput.value = "";
    }
}
