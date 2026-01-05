import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';

// Import ThemeProvider
import { ThemeProvider } from './context/ThemeContext';

// @ts-ignore
import Header from './components/header/header.tsx';
// @ts-ignore
import Hero from './components/hero/hero.tsx';
// @ts-ignore
import SocialLinks from './components/social_links/social_links.tsx';
// @ts-ignore
import Resume from './components/resume/resume.tsx';
// @ts-ignore
import Projects from './components/projects/projects.tsx';
// @ts-ignore
import About from './components/about/about.tsx';
// @ts-ignore
import Footer from './components/footer/footer.tsx';
// @ts-ignore
import Techstack from './components/techstack/techstack.tsx';
// @ts-ignore
import ContributionMap from './components/contribution_map/contribution_map.tsx';

const AppContainer = styled.div`
  background: var(--bg-primary);
  min-height: 100vh;
  padding: 20px 0;
  position: relative;
  
  /* Animated gradient background */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--gradient-primary);
    opacity: 0.03;
    z-index: -1;
    pointer-events: none;
  }
`;

const MainContent = styled.div`
  & > * {
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
  }
  
  & > *:nth-child(1) { animation-delay: 0s; }
  & > *:nth-child(2) { animation-delay: 0.1s; }
  & > *:nth-child(3) { animation-delay: 0.2s; }
  & > *:nth-child(4) { animation-delay: 0.3s; }
  & > *:nth-child(5) { animation-delay: 0.4s; }
  & > *:nth-child(6) { animation-delay: 0.5s; }
  & > *:nth-child(7) { animation-delay: 0.6s; }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Hero />
            <About />
            <Resume />
            <Projects />
            <Techstack />
            <ContributionMap />
            <SocialLinks />
          </MainContent>
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
