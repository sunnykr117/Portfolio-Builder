import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import robot from '../../assets/robot/webp/robot.webp'; // Importing robot image

// Main container for the hero section
const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: #fff;
  overflow: hidden;
  font-family: 'RobotoMono', sans-serif;

  @media (min-width: 768px) {
    flex-direction: row;
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

  @media (max-width: 768px) {
    padding-top: 0;
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
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

// ✔ FIXED NAME HERE
const RobotImg = styled.img`
  width: 80%;
  z-index: 1;
  animation: ${floatAnimation} 3s infinite;

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
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.8;

  ${({ left, top, size, containerWidth, containerHeight }) => css`
    width: ${size}px;
    height: ${size}px;
    left: ${left}px;
    top: ${top}px;
    animation: ${shrinkAndMove(left, top, containerWidth, containerHeight)} 2s linear forwards;
  `}
`;

const GradientText = styled.h2`
  background: linear-gradient(90deg, #8a2be2, #d4a1ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 4em;
  font-weight: bold;
  margin: 0.5em 0;
`;

const TypewriterText = styled.div`
  color: #d4a1ff;
  font-size: 1.5em;
  margin-top: 0.5em;
  white-space: nowrap;
  overflow: hidden;
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
    "Welcome aboard! Let’s explore my world of tech.",
    "Hi! I’m Sunny — developer, creator, and problem solver.",
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
    <HeroContainer>
      <LeftContainer>
        <h1>{topLine}</h1>
        <GradientText>I'm Sunny Kumar.</GradientText>
        <TypewriterText>{currentText}</TypewriterText>
      </LeftContainer>

      <RightContainer ref={rightContainerRef}>
        {/* ✔ FIXED JSX TAG */}
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
