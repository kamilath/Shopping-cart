import React from "react";

const Footer = () => {
  return (
    <>
      <footer
        className="footer d-flex align-items-center justify-content-center"
        style={{
          padding: "1rem 0",
          backgroundColor: "var(--nav-bg)",
          color: "var(--text-color)",
          transition: "background-color 0.3s ease, color 0.3s ease",
          minHeight: "80px",
        }}
      >
        <div className="text-center">
          <p className="mb-2 mb-md-0" style={{ fontSize: "1rem" }}>
            Made with ❤️ by{" "}
            <a
              href="https://github.com/kamilath"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--text-color)",
                textDecoration: "none",  // no underline
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              KAMILATH RIFKA S
            </a>
          </p>
          <a
            href="https://github.com/kamilath"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--text-color)",
              fontSize: "1.5rem",
              marginLeft: "10px",
              display: "inline-block",
            }}
          >
            <i className="fa fa-github"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
