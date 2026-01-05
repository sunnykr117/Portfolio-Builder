import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './about.scss';

import sunny from '../../assets/me/webp/sunny1.webp';

const photos = [sunny];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div
      className={`about-container ${isVisible ? 'visible' : ''}`}
      id="about"
      ref={elementRef}
    >
      <section className="about-intro">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hello! My name is <span className="purple-text">Sunny Kumar</span>. I'm an enthusiastic and detail-oriented software developer
            experienced in <span className="purple-text">Flutter</span> and <span className="purple-text">Dart</span> with strong web development
            skills in <span className="purple-text">HTML, CSS, and JavaScript</span>.
          </p>
          <p>
            I'm currently pursuing my <span className="purple-text">Master of Computer Applications (MCA)</span> at
            <span className="purple-text"> PES University, Bengaluru</span>.
          </p>
          <p>
            My focus is on building <span className="purple-text">scalable, cross-platform, and user-friendly applications</span>.
            I enjoy exploring technologies like <span className="purple-text">React, Node.js, MongoDB, and Supabase</span> to deliver impactful digital experiences.
          </p>
          <p>
            I'm passionate about learning and adapting to new frameworks and tools quickly. My strengths lie in
            <span className="purple-text"> teamwork, adaptability, leadership,</span> and <span className="purple-text">effective communication</span>,
            which help me collaborate and grow in fast-paced environments.
          </p>
          <p>
            Beyond coding, I love <span className="purple-text">listening to music</span> and <span className="purple-text">watching movies</span>,
            which help me stay creative and inspired.
          </p>
          <p>
            If you'd like to connect or see more of my work, feel free to visit my
            <a href="https://linkedin.com/in/-sunny-kumar-/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or
            <a href="https://github.com/sunnykr117/" target="_blank" rel="noopener noreferrer"> GitHub</a>.
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="Sunny Kumar" />
        </div>
      </section>
    </div>
  );
};

export default About;
