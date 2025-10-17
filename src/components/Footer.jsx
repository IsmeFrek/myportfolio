import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio</h3>
            <p>Management Information Systems Professional</p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="GitHub">👨‍💻</a>
              <a href="#" aria-label="Email">📧</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Expertise Areas</h4>
            <ul>
              <li>Information Systems</li>
              <li>Cybersecurity</li>
              <li>Cloud Computing</li>
              <li>Web Development</li>
              <li>Database Management</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>React & Angular</li>
              <li>C# & Python</li>
              <li>AWS Cloud</li>
              <li>MySQL & MongoDB</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Choy Long. All rights reserved.</p>
            <p>Built with React & Vite | Designed with passion 💙</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;