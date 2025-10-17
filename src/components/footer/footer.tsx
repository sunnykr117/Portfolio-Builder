import React from 'react';
import './footer.scss';
import { FaGithub, FaLinkedin, FaGlobe, FaCode, FaDev } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="left-align">
        <p>
          Developed & Designed with <span className="purple-heart">❤️</span> by
          <a href="https://linkedin.com/in/-sunny-kumar-/" target="_blank" rel="noopener noreferrer" className="footer-link">Me</a>.
        </p>
      </div>
      <div className="center-align">
        <p>&copy; Sunny Kumar 2025</p>
      </div>
      <div className="right-align social-icons">
        <a href="https://github.com/sunnykr117/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/-sunny-kumar-/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://resume-website-ruby-six.vercel.app/" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
          <a href="https://leetcode.com/u/sunnykr117/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
      </div>
    </footer>
  );
};

export default Footer;
