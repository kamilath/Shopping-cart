import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const translations = {
  en: {
    home: "Home",
    products: "Products",
    about: "About",
    contact: "Contact",
    login: "Login",
    register: "Register",
    cart: "Cart",
    darkMode: "Dark Mode",
    lightMode: "Light Mode",
    language: "தமிழ்" // label to switch to Tamil
  },
  ta: {
    home: "முகப்பு",
    products: "பொருட்கள்",
    about: "எங்களை பற்றி",
    contact: "தொடர்பு கொள்ள",
    login: "உள்நுழைய",
    register: "பதிவு செய்ய",
    cart: "பண்டங்கள்",
    darkMode: "இருண்டு நிலை",
    lightMode: "ஒளி நிலை",
    language: "English" // label to switch back to English
  }
};

const Navbar = () => {
  const state = useSelector(state => state.handleCart);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  // Language state (default English)
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'en');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ta' : 'en'));
  };

  const t = translations[language];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">EasyMart</NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">{t.home}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/product">{t.products}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">{t.about}</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">{t.contact}</NavLink>
              </li>
            </ul>
            <div className="buttons text-center">
              <button
                className="btn btn-outline-dark m-2"
                onClick={() => setDarkMode(prev => !prev)}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? t.lightMode : t.darkMode}
              </button>

              <button
                className="btn btn-outline-dark m-2"
                onClick={toggleLanguage}
                aria-label="Toggle Language"
              >
                {t.language}
              </button>

              <NavLink to="/login" className="btn btn-outline-dark m-2">
                <i className="fa fa-sign-in-alt mr-1"></i> {t.login}
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark m-2">
                <i className="fa fa-user-plus mr-1"></i> {t.register}
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark m-2">
                <i className="fa fa-cart-shopping mr-1"></i> {t.cart} ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        /* Light mode colors */
        :root {
          --bg-color: #fff;
          --text-color: #000;
          --nav-bg: #fff;
          --nav-link-color: #000;
          --nav-link-active: #000;
          --btn-outline-color: #000;
          --btn-outline-hover-bg: transparent; /* no hover bg */
          --btn-outline-hover-color: #000; /* no color change on hover */
          --card-bg: #fff;
          --card-border: #000;
          --input-bg: #fff;
          --input-border: #000;
          --input-color: #000;
          --placeholder-color: #555;
        }

        /* Dark mode colors */
        .dark-mode {
          --bg-color: #000;
          --text-color: #fff;
          --nav-bg: #000;
          --nav-link-color: #fff;
          --nav-link-active: #fff;
          --btn-outline-color: #fff;
          --btn-outline-hover-bg: transparent;
          --btn-outline-hover-color: #fff;
          --card-bg: #000;
          --card-border: #fff;
          --input-bg: #000;
          --input-border: #fff;
          --input-color: #fff;
          --placeholder-color: #aaa;
        }

        body, html {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s, color 0.3s;
        }

        .navbar {
          background-color: var(--nav-bg) !important;
        }

        .nav-link {
          color: var(--nav-link-color) !important;
          transition: none;
        }

        .nav-link.active {
          color: var(--nav-link-active) !important;
          font-weight: 600;
        }

        .btn-outline-dark {
          color: var(--btn-outline-color);
          border-color: var(--btn-outline-color);
          background-color: transparent;
          transition: none;
        }

        .btn-outline-dark:hover {
          background-color: var(--btn-outline-hover-bg);
          color: var(--btn-outline-hover-color);
          border-color: var(--btn-outline-color);
          cursor: pointer;
          /* no color or bg change */
        }

        .container {
          background-color: var(--card-bg);
        }

        .card {
          background-color: var(--card-bg);
          color: var(--text-color);
          border-color: var(--card-border);
        }

        input, textarea, select {
          background-color: var(--input-bg);
          border: 1px solid var(--input-border);
          color: var(--input-color);
        }

        input::placeholder, textarea::placeholder {
          color: var(--placeholder-color);
        }
      `}</style>
    </>
  );
};

export default Navbar;
