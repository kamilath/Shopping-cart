import React, { useState } from "react";

const ChatBotWithToggle = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your shopping assistant. Ask me anything!" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const reply = generateBotReply(input);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);

    setInput("");
  };

  const generateBotReply = (msg) => {
    const lower = msg.toLowerCase();

    if (lower.includes("returnable")) return "Yes, most items are returnable within 7 days.";
    if (lower.includes("shipping")) return "Shipping is free for orders over ₹499 in India.";
    if (lower.includes("india") && lower.includes("price")) return "Prices in India may include GST; electronics might be cheaper in the USA.";
    if (lower.includes("nearby") || lower.includes("store")) return "Please allow location access to find nearby stores.";
    if (lower.includes("hello") || lower.includes("hi")) return "Hello! How can I help you today?";
    if (lower.includes("faq")) return "Ask me about returns, shipping, pricing, or stores.";

    return "Sorry, I don't have an answer for that. Try asking about returns or shipping!";
  };

  return (
    <>
      {/* Chatbot icon button */}
      <div className="chatbot-icon" onClick={() => setOpen(!open)} title="Chat with us!">
        💬
      </div>

      {/* Chat window */}
      {open && (
        <div className="chatbot-container">
          <div className="chat-window">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.sender === "bot" ? "bot" : "user"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="input-area">
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}

      <style>{`
        .chatbot-icon {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background: #007bff;
          color: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          font-size: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0,0,0,0.3);
          z-index: 1000;
          user-select: none;
        }
        .chatbot-container {
          position: fixed;
          bottom: 80px;
          right: 20px;
          width: 320px;
          height: 400px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          font-family: Arial, sans-serif;
          z-index: 1000;
        }
        .chat-window {
          flex: 1;
          overflow-y: auto;
          padding: 10px;
          background-color: #f7f7f7;
          display: flex;
          flex-direction: column;
        }
        .message {
          margin: 8px 0;
          padding: 8px 12px;
          border-radius: 8px;
          max-width: 80%;
          word-wrap: break-word;
        }
        .message.bot {
          background-color: #e0e0e0;
          align-self: flex-start;
        }
        .message.user {
          background-color: #007bff;
          color: white;
          align-self: flex-end;
          margin-left: auto;
        }
        .input-area {
          display: flex;
          border-top: 1px solid #ddd;
        }
        .input-area input {
          flex: 1;
          border: none;
          padding: 10px;
          font-size: 1rem;
          outline: none;
        }
        .input-area button {
          border: none;
          background-color: #007bff;
          color: white;
          padding: 10px 16px;
          cursor: pointer;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        .input-area button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default ChatBotWithToggle;
