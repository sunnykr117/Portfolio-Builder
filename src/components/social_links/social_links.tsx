import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaGlobe, FaCode } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Container for the entire social section
const SocialContainer = styled.div`
  width: 85%;
  max-width: 600px;
  margin: 60px auto;
  padding: 50px 40px;
  
  /* Glassmorphism */
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  box-shadow: 0 8px 32px var(--shadow-color);
  
  text-align: center;
  font-family: 'Inter', sans-serif;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  opacity: 0;
  transform: translateY(30px);
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Animated gradient background */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: var(--gradient-primary);
    opacity: 0.05;
    z-index: 0;
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 50px var(--shadow-color);
    border-color: var(--accent-primary);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 35px 25px;
  }
`;

// Styled title for the social section
const SocialTitle = styled.h3`
  color: var(--text-primary);
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 15px;
  font-family: 'Poppins', sans-serif;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.6em;
  }
`;

// Styled description text
const SocialDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 30px;
  font-size: 1.1em;
  position: relative;
  z-index: 1;

  .highlight {
    color: var(--accent-primary);
    font-weight: 600;
  }
`;

// Container for the social icons
const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  position: relative;
  z-index: 1;

  a {
    color: var(--text-secondary);
    font-size: 2.5em;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 15px;
    border-radius: 50%;
    background: var(--glass-bg);
    border: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;

    &:hover {
      color: var(--accent-primary);
      background: var(--bg-secondary);
      border-color: var(--accent-primary);
      transform: translateY(-10px) rotate(360deg) scale(1.1);
      box-shadow: 0 10px 30px var(--shadow-color);
    }
    
    @media (max-width: 768px) {
      font-size: 2em;
      width: 60px;
      height: 60px;
    }
  }
  
  /* Stagger animation on visibility */
  a:nth-child(1) {
    animation: scaleIn 0.5s ease-out 0.2s backwards;
  }
  a:nth-child(2) {
    animation: scaleIn 0.5s ease-out 0.3s backwards;
  }
  a:nth-child(3) {
    animation: scaleIn 0.5s ease-out 0.4s backwards;
  }
  a:nth-child(4) {
    animation: scaleIn 0.5s ease-out 0.5s backwards;
  }
`;

// Main React component
const SocialLinks: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <SocialContainer
      ref={elementRef}
      className={isVisible ? 'visible' : ''}
    >
      <SocialTitle>FIND ME ON</SocialTitle>
      <SocialDescription>
        Feel free to <span className="highlight">connect</span> with me
      </SocialDescription>
      <SocialIcons>
        <a href="https://github.com/sunnykr117/" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/-sunny-kumar-/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" title="Website">
          <FaGlobe />
        </a>
        <a href="https://leetcode.com/u/sunnykr117/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <FaCode />
        </a>
      </SocialIcons>
    </SocialContainer>
  );
};

export default SocialLinks;
