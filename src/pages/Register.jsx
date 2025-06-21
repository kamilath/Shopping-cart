import React, { useState } from 'react';
import { Footer, Navbar } from "../components";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
  const [language, setLanguage] = useState("en");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const content = {
    en: {
      title: "Register",
      fullName: "Full Name",
      fullNamePlaceholder: "Enter Your Name",
      email: "Email address",
      emailPlaceholder: "name@example.com",
      password: "Password",
      passwordPlaceholder: "Password",
      loginText: "Already have an account?",
      loginLink: "Login",
      button: "Register",
      errorFill: "Please fill all fields",
      success: "Registration Successful!",
    },
    ta: {
      title: "பதிவு",
      fullName: "முழு பெயர்",
      fullNamePlaceholder: "உங்கள் பெயரை உள்ளிடவும்",
      email: "மின்னஞ்சல் முகவரி",
      emailPlaceholder: "name@example.com",
      password: "கடவுச்சொல்",
      passwordPlaceholder: "கடவுச்சொல்",
      loginText: "ஏற்கனவே கணக்கு உள்ளதா?",
      loginLink: "உள்நுழைக",
      button: "பதிவு செய்யவும்",
      errorFill: "தயவுசெய்து அனைத்து புலங்களையும் பூர்த்தி செய்யவும்",
      success: "பதிவு வெற்றிகரமாக முடிந்தது!",
    }
  };

  const t = content[language];

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error(t.errorFill);
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      toast.success(t.success);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {/* Language toggle */}
        <div className="text-center mb-4">
          <button
            className={`lang-btn mx-2 ${language === "en" ? "active" : ""}`}
            onClick={() => setLanguage("en")}
            aria-label="Switch to English"
          >
            English
          </button>
          <button
            className={`lang-btn mx-2 ${language === "ta" ? "active" : ""}`}
            onClick={() => setLanguage("ta")}
            aria-label="Switch to Tamil"
          >
            தமிழ்
          </button>
        </div>

        <h1 className="text-center">{t.title}</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleRegister}>
              <div className="form my-3">
                <label htmlFor="Name">{t.fullName}</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder={t.fullNamePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">{t.email}</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">{t.password}</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>{t.loginText} <Link to="/login" className="text-decoration-underline text-info">{t.loginLink}</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  {t.button}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />

      <style>{`
        .lang-btn {
          background-color: black;
          color: white;
          border: 1px solid white;
          padding: 8px 20px;
          cursor: pointer;
          font-weight: 600;
          transition: none;
        }
        .lang-btn.active {
          background-color: white;
          color: black;
          border: 1px solid black;
        }
        .lang-btn:focus {
          outline: 2px solid white;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
};

export default Register;
