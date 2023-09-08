document.addEventListener("DOMContentLoaded", function () {
  // Reference to the chat container
  const chatContainer = document.getElementById("chat-container");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");

  // Function to send a message to the server
  async function sendMessage(message) {
    // You'll need to replace this with your actual PocketBase API endpoint
    const apiUrl =
      "https://pocketbase-docker.hop.sh/api/collections/chat/records";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: message }),
      });

      if (response.ok) {
        messageInput.value = ""; // Clear the input field
        loadChat(); // Reload the chat messages
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Function to load chat messages from the server
  async function loadChat() {
    // You'll need to replace this with your actual PocketBase API endpoint
    const apiUrl =
      "https://pocketbase-docker.hop.sh/api/collections/chat/records";

    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const messages = await response.json();
        // Clear the chat container
        chatContainer.innerHTML = "";

        // Render and append the messages with HTML content
        messages.items.forEach((message) => {
          // Create a chat card div
          const chatCard = document.createElement("div");
          chatCard.classList.add("chat", "chat-start", "mb-4"); // Add Tailwind classes
          chatContainer.appendChild(chatCard);

          // Create the chat image div
          const chatImage = document.createElement("div");
          chatImage.classList.add("chat-image", "avatar");
          chatCard.appendChild(chatImage);

          // Create the user avatar div
          const userAvatar = document.createElement("div");
          userAvatar.classList.add("w-10", "rounded-full");
          chatImage.appendChild(userAvatar);

          // Create the user avatar image
          const avatarImage = document.createElement("img");
          avatarImage.src = `https://api.dicebear.com/7.x/notionists-neutral/svg?seed=${
            !message.username && "You"
          }`; // Replace with `message.username`
          userAvatar.appendChild(avatarImage);

          // Create the chat header
          const chatHeader = document.createElement("div");
          chatHeader.classList.add("chat-header");
          chatHeader.textContent = !message.username && "You";

          // Create the time element
          const timeElement = document.createElement("time");
          timeElement.classList.add("text-xs", "opacity-50");
          timeElement.textContent = message.updated;
          chatHeader.appendChild(timeElement);

          chatCard.appendChild(chatHeader);

          // Create the chat bubble
          const chatBubble = document.createElement("div");
          chatBubble.classList.add("chat-bubble");
          chatBubble.innerHTML = message.message;
          chatCard.appendChild(chatBubble);

          // Create the chat footer
          const chatFooter = document.createElement("div");
          chatFooter.classList.add("chat-footer", "opacity-50");
          chatFooter.textContent = "Delivered";
          chatCard.appendChild(chatFooter);
        });
      } else {
        console.error("Failed to load chat.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // Load initial chat messages
  loadChat();

  // Add event listener to send button
  sendButton.addEventListener("click", function () {
    const message = messageInput.value.trim();
    if (message) {
      sendMessage(message);
    }
  });
});
