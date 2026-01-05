import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTheme } from '../../context/ThemeContext';
import robot from '../../assets/robot/webp/robot.webp';

// Main container for the hero section
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;

  /* Animated gradient background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.05;
    z-index: 0;
    animation: ${keyframes`
      0%, 100% { transform: scale(1) rotate(0deg); }
      50% { transform: scale(1.1) rotate(5deg); }
    `} 20s ease-in-out infinite;
  }

  padding-top: 70px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-top: 0;
  }
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  text-align: left;
  margin-top: -10%;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding-top: 20px;
    margin-top: 0;
  }

  @media (min-width: 768px) {
    flex: 0 0 35%;
  }
`;

const RightContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 50vh;

  @media (min-width: 768px) {
    flex: 0 0 65%;
  }
`;

// Floating animation
const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

const RobotImg = styled.img`
  width: 80%;
  z-index: 1;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  filter: drop-shadow(0 10px 30px var(--accent-primary));
  transition: filter 0.3s ease;

  &:hover {
    filter: drop-shadow(0 15px 40px var(--accent-primary));
    animation-duration: 3s;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const shrinkAndMove = (left: number, top: number, containerWidth: number, containerHeight: number) => keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(${containerWidth / 2 - left}px, ${containerHeight / 2 - top}px) scale(0); opacity: 0; }
`;

const Circle = styled.div<{ left: number; top: number; size: number; containerWidth: number; containerHeight: number }>`
  position: absolute;
  background: var(--accent-primary);
  border-radius: 50%;
  opacity: 0.6;

  ${({ left, top, size, containerWidth, containerHeight }) => css`
    width: ${size}px;
    height: ${size}px;
    left: ${left}px;
    top: ${top}px;
    animation: ${shrinkAndMove(left, top, containerWidth, containerHeight)} 2s linear forwards;
  `}
`;

const TopLine = styled.h1`
  font-size: 1.8em;
  font-weight: 400;
  color: var(--text-secondary);
  margin-bottom: 0.5em;
  opacity: 0;
  animation: fadeInDown 0.8s ease-out 0.2s forwards;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

const GradientText = styled.h2`
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 4em;
  font-weight: 800;
  margin: 0.3em 0;
  font-family: 'Poppins', sans-serif;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  
  @media (max-width: 768px) {
    font-size: 2.5em;
  }
`;

const TypewriterText = styled.div`
  color: var(--accent-primary);
  font-size: 1.8em;
  font-weight: 500;
  margin-top: 0.5em;
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
  animation: fadeInLeft 0.8s ease-out 0.6s forwards;
  
  /* Glow effect */
  text-shadow: 0 0 20px var(--accent-primary);

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

interface CircleProps {
  id: number;
  left: number;
  top: number;
  size: number;
  containerWidth: number;
  containerHeight: number;
}

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [circles, setCircles] = useState<CircleProps[]>([]);
  const [topLine, setTopLine] = useState('');
  const [currentText, setCurrentText] = useState('');
  const rightContainerRef = useRef<HTMLDivElement>(null);

  const topLines = [
    "Hey there! welcome to my portfolio.",
    "Crafting digital experiences that inspire and perform.",
    "Turning ideas into reality through clean, efficient code.",
    "Building modern apps with creativity and precision.",
    "Exploring technology, one project at a time.",
    "Passionate about innovation, design, and development.",
    "Welcome aboard! Let's explore my world of tech.",
    "Hi! I'm Sunny — developer, creator, and problem solver.",
    "Creating code that connects ideas with innovation.",
    "Bringing imagination to life through technology.",
  ];

  const typewriterTexts = ["Full-Stackker", "AI Enthusiast", "Coffee Lover"];

  useEffect(() => {
    setTopLine(topLines[Math.floor(Math.random() * topLines.length)]);
  }, []);

  useEffect(() => {
    let i = 0;
    let textPos = 0;
    let str = typewriterTexts[i];
    const speed = 100;
    const deleteSpeed = 50;
    const wait = 2000;

    function type() {
      setCurrentText(str.substring(0, textPos) + "_");
      if (textPos++ === str.length) setTimeout(deleteText, wait);
      else setTimeout(type, speed);
    }

    function deleteText() {
      setCurrentText(str.substring(0, textPos) + "_");
      if (textPos-- === 0) {
        i = (i + 1) % typewriterTexts.length;
        str = typewriterTexts[i];
        setTimeout(type, speed);
      } else {
        setTimeout(deleteText, deleteSpeed);
      }
    }

    type();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (rightContainerRef.current) {
        const w = rightContainerRef.current.clientWidth;
        const h = rightContainerRef.current.clientHeight;

        const newCircles = Array.from({ length: 7 }).map(() => {
          const edge = Math.random() > 0.5;
          const left = edge ? (Math.random() > 0.5 ? 0 : w - 10) : Math.random() * w;
          const top = !edge ? (Math.random() > 0.5 ? 0 : h - 10) : Math.random() * h;

          return {
            id: Date.now() + Math.random(),
            left,
            top,
            size: Math.random() * 20 + 10,
            containerWidth: w,
            containerHeight: h,
          };
        });

        setCircles(prev => [...prev, ...newCircles]);

        setTimeout(() => {
          setCircles(prev =>
            prev.filter(c => !newCircles.some(n => n.id === c.id))
          );
        }, 2000);
      }
    }, 333);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroContainer id="hero">
      <LeftContainer>
        <TopLine>{topLine}</TopLine>
        <GradientText>I'm Sunny Kumar.</GradientText>
        <TypewriterText>{currentText}</TypewriterText>
      </LeftContainer>

      <RightContainer ref={rightContainerRef}>
        <RobotImg src={robot} alt="robot" />

        {circles.map(c => (
          <Circle
            key={c.id}
            left={c.left}
            top={c.top}
            size={c.size}
            containerWidth={c.containerWidth}
            containerHeight={c.containerHeight}
          />
        ))}
      </RightContainer>
    </HeroContainer>
  );
};

export default Hero;
