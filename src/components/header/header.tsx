import React, { useState } from 'react';
import { FaHome, FaUser, FaCode, FaFileAlt, FaBars, FaTimes, FaGithub, FaStar, FaCodeBranch, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import './header.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="header-container">
      <a href="#home" className="logo" onClick={(e) => handleClick(e, 'home')}>
        Sunny Kumar
      </a>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#hero" className="nav-link" onClick={(e) => handleClick(e, 'hero')}>
          <FaHome />
          Home
        </a>
        <a href="#about" className="nav-link" onClick={(e) => handleClick(e, 'about')}>
          <FaUser />
          About
        </a>
        <a href="#resume" className="nav-link" onClick={(e) => handleClick(e, 'resume')}>
          <FaFileAlt />
          Resume
        </a>
        <a href="#projects" className="nav-link" onClick={(e) => handleClick(e, 'projects')}>
          <FaCode />
          Projects
        </a>
        <a
          className="button"
          href="https://github.com/sunnykr117/Portfolio-Builder"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          <FaStar />
          {`or\u00A0`}
          <FaCodeBranch />
        </a>

        {/* Theme Toggle Button (in mobile menu) */}
        <button
          className="theme-toggle mobile-only"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
        </button>
      </nav>

      <div className="header-actions">
        {/* Theme Toggle Button (desktop) */}
        <button
          className="theme-toggle desktop-only"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={30} className="close-icon" /> : <FaBars size={30} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
