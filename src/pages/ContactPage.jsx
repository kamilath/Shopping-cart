import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import ChatBot from "./ChatBot";

const ContactPage = () => {
  const [language, setLanguage] = useState("en"); // default English

  const content = {
    en: {
      heading: "Contact Us",
      nameLabel: "Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Email",
      emailPlaceholder: "name@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Enter your message",
      sendButton: "Send",
    },
    ta: {
      heading: "எங்களைத் தொடர்புகொள்ளவும்",
      nameLabel: "பெயர்",
      namePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
      emailLabel: "மின்னஞ்சல்",
      emailPlaceholder: "name@example.com",
      messageLabel: "செய்தி",
      messagePlaceholder: "உங்கள் செய்தியை உள்ளிடவும்",
      sendButton: "அனுப்பு",
    },
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {/* Language Toggle Buttons - Black & White style */}
        <div className="text-center mb-4">
          <button
            className={`btn btn-outline-dark mx-2 ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className={`btn btn-outline-dark mx-2 ${language === "ta" ? "active" : ""}`}
            onClick={() => setLanguage("ta")}
          >
            தமிழ்
          </button>
        </div>

        <h1 className="text-center">{content[language].heading}</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="Name">{content[language].nameLabel}</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder={content[language].namePlaceholder}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">{content[language].emailLabel}</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder={content[language].emailPlaceholder}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">{content[language].messageLabel}</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder={content[language].messagePlaceholder}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  {content[language].sendButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default ContactPage;
