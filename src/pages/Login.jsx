import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [language, setLanguage] = useState("en"); // language toggle state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const content = {
    en: {
      heading: "Login",
      emailLabel: "Email address",
      emailPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Password",
      newHere: "New Here?",
      register: "Register",
      loginButton: (loading) => (loading ? "Logging in..." : "Login"),
      errorPrefix: "Error: ",
    },
    ta: {
      heading: "உள்நுழைவு",
      emailLabel: "மின்னஞ்சல் முகவரி",
      emailPlaceholder: "name@example.com",
      passwordLabel: "கடவுச்சொல்",
      passwordPlaceholder: "கடவுச்சொல்",
      newHere: "புதியவரா?",
      register: "பதிவு செய்யவும்",
      loginButton: (loading) => (loading ? "உள்நுழைகிறது..." : "உள்நுழைவு"),
      errorPrefix: "பிழை: ",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        {/* Language toggle - Black and White style */}
        <div className="text-center mb-4">
          <button
            className={`btn btn-outline-dark mx-2 ${
              language === "en" ? "active" : ""
            }`}
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className={`btn btn-outline-dark mx-2 ${
              language === "ta" ? "active" : ""
            }`}
            onClick={() => setLanguage("ta")}
          >
            தமிழ்
          </button>
        </div>

        <h1 className="text-center">{content[language].heading}</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="alert alert-danger" role="alert">
                  {content[language].errorPrefix + error}
                </div>
              )}
              <div className="my-3">
                <label htmlFor="email" className="form-label">
                  {content[language].emailLabel}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder={content[language].emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <label htmlFor="password" className="form-label">
                  {content[language].passwordLabel}
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder={content[language].passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="my-3">
                <p>
                  {content[language].newHere}{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    {content[language].register}
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled={loading}
                >
                  {content[language].loginButton(loading)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
