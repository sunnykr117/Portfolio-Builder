import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Importing assets for project GIFs
import davis from '../../assets/projects/davis.gif';
import BarberAppointment from '../../assets/projects/BarberAppointment.gif';
import StudentPredictor from '../../assets/projects/StudentPredictor.gif';
import StudentPortfolio from '../../assets/projects/StudentPortfolio.gif';
import WeatherApp from '../../assets/projects/WeatherApp.gif';

// Main container for all projects
const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  padding: 60px 10px;
  overflow-x: hidden;
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Title for the projects section
const SectionTitle = styled.h2`
  font-size: 3em;
  margin-bottom: 50px;
  text-align: center;
  width: 100%;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  
  @media (max-width: 768px) {
    font-size: 2.2em;
  }
`;

// Container for big projects
const BigProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

// Container for individual projects with glassmorphism
const ProjectContainer = styled.div`
  width: 100%;
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 50px var(--shadow-color);
    border-color: var(--accent-primary);
  }

  /* Background image with parallax effect */
  img, video {
    width: 100%;
    max-height: 400px;
    border-radius: 16px;
    object-fit: cover;
    margin-bottom: 25px;
    opacity: 0.9;
    transition: all 0.4s ease;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  &:hover img, &:hover video {
    opacity: 1;
    transform: scale(1.02);
  }

  h3 {
    font-size: 2em;
    margin-bottom: 15px;
    color: var(--accent-primary);
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 1.6em;
    }
  }

  p {
    font-size: 1.15em;
    margin-bottom: 25px;
    color: var(--text-secondary);
    line-height: 1.7;
    
    @media (max-width: 768px) {
      font-size: 1em;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
  }

  a {
    color: var(--accent-primary);
    font-size: 1.2em;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    padding: 12px 24px;
    border: 2px solid var(--accent-primary);
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 600;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: var(--accent-primary);
      color: var(--bg-primary);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px var(--shadow-color);
      
      svg {
        transform: rotate(360deg) scale(1.2);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

// Container for small projects
const SmallProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  margin-top: 30px;
`;

// Container for individual small projects
const SmallProject = styled.div`
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px var(--shadow-color);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px var(--shadow-color);
    border-color: var(--accent-primary);
  }

  img, video {
    width: 100%;
    height: 200px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 20px;
    opacity: 0.85;
    transition: all 0.3s ease;
  }
  
  &:hover img, &:hover video {
    opacity: 1;
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 12px;
    color: var(--accent-primary);
    font-weight: 600;
  }

  p {
    font-size: 1em;
    margin-bottom: 20px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

  a {
    color: var(--accent-primary);
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding: 10px 18px;
    border: 2px solid var(--accent-primary);
    border-radius: 10px;
    transition: all 0.3s ease;
    font-weight: 600;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: var(--accent-primary);
      color: var(--bg-primary);
      transform: translateY(-2px);
      box-shadow: 0 6px 15px var(--shadow-color);
      
      svg {
        transform: scale(1.3);
      }
    }
  }
`;

// Handle the "Coming Soon" click event
const handleComingSoonClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  alert('Coming soon!');
};

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <ProjectsContainer
      id="projects"
      ref={elementRef}
      className={isVisible ? 'visible' : ''}
    >
      <SectionTitle>Projects</SectionTitle>
      <BigProjectsContainer>
        <ProjectContainer>
          <img src={davis} alt="DAVIS Investment Analysis System" />
          <h3>DAVIS – Darvas, Volume, Sentiment Analysis</h3>
          <p>
            An AI-driven investment analysis platform that generates stock trading signals
            by combining Darvas Box Theory, EMAs, volume indicators, and sentiment analysis.
            It provides real-time insights through an interactive dashboard to support
            smarter investment decisions.
          </p>
          <div className="links">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> See on GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <img src={StudentPredictor} alt="Student Performance Prediction" />
          <h3>Student Performance Prediction</h3>
          <p>A AI/ML web application built with Streamlit that predicts a student's final grade and pass/fail outcome using trained regression and classification models. It takes basic academic inputs and provides instant predictions with easy visual insights.</p>
          <div className="links">
            <a href="https://github.com/sunnykr117/student_performance_prediction" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <img src={BarberAppointment} alt="Barber Appointment App" />
          <h3>Barber Appointment App</h3>
          <p>Developed a cross-platform barber appointment management app using Flutter, Supabase, and Riverpod. Features include appointment scheduling, barber availability tracking, and automated notifications.</p>
          <div className="links">
            <a href="https://github.com/sunnykr117/barbershop-suite" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" onClick={handleComingSoonClick}>
              <FaGlobe /> Try it Out
            </a>
          </div>
        </ProjectContainer>
      </BigProjectsContainer>

      <SmallProjectsContainer>
        <SmallProject>
          <img src={WeatherApp} alt="Weather Application" />
          <h3>Weather Application</h3>
          <p>Built a weather app that integrated the OpenWeather REST API to display real-time weather conditions with location-based search.</p>
          <div className="links">
            <a href="https://github.com/sunnykr117/weatherapp" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </SmallProject>

        <SmallProject>
          <img src={StudentPortfolio} alt="Portfolio GIF" />
          <h3>Portfolio Website</h3>
          <p>Built in React to showcase my best work and skills. Designed to be maintainable, responsive, and user-friendly.</p>
          <div className="links">
            <a href="https://github.com/sunnykr117/Portfolio-Builder" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" onClick={handleComingSoonClick}>
              <FaGlobe /> You're already here!
            </a>
          </div>
        </SmallProject>

        <SmallProject>
          <h3>More Projects Coming Soon...</h3>
          <p>Stay tuned!</p>
          <div className="links">
            <a href="https://github.com/sunnykr117" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="#" target="_blank" onClick={handleComingSoonClick} rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </SmallProject>
      </SmallProjectsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
