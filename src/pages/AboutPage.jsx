import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import ChatBot from "./ChatBot";

const AboutPage = () => {
  // Language state: "en" or "ta"
  const [language, setLanguage] = useState("en");

  // Text content in both languages
  const content = {
    heading: {
      en: "About Us",
      ta: "எங்களை பற்றி",
    },
    paragraphs: {
      en: [
        "Welcome to our platform – your go-to destination for discovering top career opportunities, exploring in-demand skills, and connecting with leading companies across industries.",
        "Whether you're an aspiring software engineer, data analyst, product manager, or designer, we provide curated insights to help you navigate the ever-evolving job market.",
        "Our mission is to bridge the gap between talent and opportunity by showcasing the latest hiring trends, role-specific requirements, and actionable career paths.",
        "We believe in empowering individuals with the right tools and information to take their careers to the next level.",
      ],
      ta: [
        "எங்கள் தளத்திற்கு வரவேற்கிறோம் – உங்களுக்கான சிறந்த தொழில் வாய்ப்புகளை கண்டறிய, கோரப்பட்ட திறன்களை ஆராய, மற்றும் தொழில்துறை முன்னணி நிறுவனங்களுடன் இணைக்க இது உங்கள் செல்வாக்கு தளம் ஆகும்.",
        "நீங்கள் ஒரு aspiring மென்பொருள் பொறியாளர், தரவு பகுப்பாய்வாளர், தயாரிப்பு மேலாளர் அல்லது வடிவமைப்பாளர் ஆக இருந்தாலும், நாங்கள் தகுந்த தகவல்களுடன் உங்களை நவீன வேலை சந்தையைத் தாண்டி வழி நடத்துகிறோம்.",
        "எங்கள் பணி திறமையையும் வாய்ப்பையும் இணைப்பதற்கு இடைவெளியை நிரப்புவதாகும். சமீபத்திய வேலைவாய்ப்பு போக்குகள், வேடிக்கை சார்ந்த தேவைகள் மற்றும் நடைமுறை தொழில் பாதைகளை காட்சியிடுகிறோம்.",
        "தொழிலை மேம்படுத்துவதற்கு தேவையான கருவிகள் மற்றும் தகவல்களை வழங்குவதே எங்கள் நோக்கம்.",
      ],
    },
    productsHeading: {
      en: "Our Products",
      ta: "எங்கள் தயாரிப்புகள்",
    },
    products: [
      {
        img: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
        en: "Men's Clothing",
        ta: "ஆண்களின் ஆடைகள்",
      },
      {
        img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600",
        en: "Women's Clothing",
        ta: "பெண்களின் ஆடைகள்",
      },
      {
        img: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600",
        en: "Jewelry",
        ta: "நகைகள்",
      },
      {
        img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600",
        en: "Electronics",
        ta: "மின்னணு சாதனங்கள்",
      },
    ],
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

        <h1 className="text-center">{content.heading[language]}</h1>
        <hr />
        <div className="lead text-center" style={{ whiteSpace: "pre-line" }}>
          {content.paragraphs[language].map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <h2 className="text-center py-4">{content.productsHeading[language]}</h2>
        <div className="row">
          {content.products.map((product, i) => (
            <div key={i} className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src={product.img}
                  alt={language === "en" ? product.en : product.ta}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">
                    {language === "en" ? product.en : product.ta}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default AboutPage;
