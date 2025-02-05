import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Travel Album. Todos los derechos reservados.</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        {/* Otros enlaces sociales */}
      </div>
    </footer>
  );
};

export default Footer;
